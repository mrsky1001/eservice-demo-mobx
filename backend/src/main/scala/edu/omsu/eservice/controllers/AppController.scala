package edu.omsu.eservice.controllers

import java.text.SimpleDateFormat

import com.typesafe.config.ConfigFactory
import edu.omsu.eservice.conf.Auth.Profile
import edu.omsu.eservice.conf.{Api, Auth, ResponseEnvelope}
import edu.omsu.eservice.dao.OracleDao
import edu.omsu.eservice.entities.{SearchParams, StudyProgram}
import edu.omsu.eservice.services.DemoService
import org.json4s.jackson.JsonMethods._
import org.json4s.{DefaultFormats, Formats}
import org.pac4j.core.profile.ProfileManager
import org.pac4j.sparkjava.SparkWebContext
import org.slf4j.LoggerFactory
import scalikejdbc.config.DBs
import spark._

import scala.util.Try

object AppController {
  implicit val formats: Formats = new DefaultFormats {
    override def dateFormatter = new SimpleDateFormat("dd.MM.yyyy")
  }

  def main(args: Array[String]) {
    val logger = LoggerFactory.getLogger(AppController.getClass)
    val config = ConfigFactory.load()

    DBs.setup('dbConnected)

    // Das client
    val client = Auth.makeDasClient(config, OracleDao.findPersonIdByLogin)
    val api = new Api(config, client)

    Spark.exception(classOf[AppException], new ExceptionHandler[AppException] {
      override def handle(exception: AppException, request: Request, response: Response): Unit = {
        val context = new SparkWebContext(request, response)
        val manager = new ProfileManager[Profile](context)
        if (!manager.isAuthenticated) {
          logger.error("[" + request.requestMethod() + " " + request.uri() + "] " + exception.getMessage)
        } else {
          val profile: Profile = manager.get(true).get()
          profile.personId match {
            case Some(personId) => logger.error(profile.username + "(" + personId + ") [" + request.requestMethod() + " " + request.uri() + "] " + exception.getMessage)
            case None => logger.error(profile.username + " [" + request.requestMethod() + " " + request.uri() + "] " + exception.getMessage)
          }
        }
        response.header("Content-type", "application/json; charset=\"UTF-8\"")
        response.status(200)
        val envelope: ResponseEnvelope = ResponseEnvelope(success = false, exception.getMessage, exception.data)
        response.body(api.jsonTransformer.render(envelope))
      }
    })

    logger.info("Application initialized")

    def getList(login: String, personId: Long, req: Request, res: Response): List[StudyProgram] = {
      val searchParams = Try(parse(req.body()).extract[SearchParams]).getOrElse {
        throw new AppException("Параметры поиска указаны неверно")
      }

      DemoService.getList(personId, searchParams)
    }

    def getTestListPost(login: String, personId: Long, req: Request, res: Response): List[StudyProgram] = {
      val searchParams = Try(parse(req.body()).extract[SearchParams]).getOrElse {
        throw new AppException("Параметры поиска указаны неверно")
      }

      DemoService.getTestList(searchParams)
    }

    def getTestList(login: String, personId: Long, req: Request, res: Response): List[StudyProgram] = {
      DemoService.getList(personId, SearchParams(Option(""), Option("")))
    }

//    def saveList(login: String, personId: Long, req: Request, res: Response): AnyRef = {
//      val list = parse(req.body()).extract[List[DemoEntity]]
//      DemoService.saveList(list)
//    }

    // Routes
    api.get("/list", getTestList)
    api.post("/list", "application/json", getList)
    api.get("/test-list", getTestList)
    api.post("/test-list", "application/json", getTestListPost)

//    api.post("/save", "application/json", saveList)
  }
}