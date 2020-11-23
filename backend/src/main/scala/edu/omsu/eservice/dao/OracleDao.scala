package edu.omsu.eservice.dao

import edu.omsu.eservice.connection.DbConnected
import edu.omsu.eservice.entities.{SearchParams, StudyProgram}
import scalikejdbc._

object OracleDao extends DbConnected with Dao {
  //core queries
  def findPersonIdByLogin(username: String): Option[Long] =
    insideReadOnly { implicit session =>
      sql"""
        select person_id
        from wv_users u
        where u.login=upper($username)
       """
        .map {
          rs => rs.long("person_id")
        }.single().apply()
    }

  //user queries
  def studyPrograms(personId: Long, searchParams: SearchParams): List[StudyProgram] = {
    val wheres = if ((searchParams.studentName.isEmpty && searchParams.numberGroup.isEmpty)) {
      sqls"члвк_ид = $personId"
    } else {
      sqls""" LOWER(фио) like LOWER('%'||${searchParams.studentName.getOrElse("")}||'%') AND
        LOWER(номер_группы) like LOWER('%'||${searchParams.numberGroup.getOrElse("")}||'%')"""
    }

    insideReadOnly { implicit session =>
      sql"""
          select
             члвк_ид,
             ссп_ид2,
             фио,
             номер_группы,
             направление,
             факультет,
             форма_обучения,
             срок_обучения,
             курс,
             финансирование
          from ип8_студ_инфо
          where $wheres
          """.map { rs =>
        StudyProgram(
          rs.long("члвк_ид"),
          rs.long("ссп_ид2"),
          rs.string("фио"),
          rs.string("номер_группы"),
          rs.string("направление"),
          rs.string("факультет"),
          rs.string("форма_обучения"),
          rs.string("срок_обучения"),
          rs.string("курс"),
          rs.string("финансирование")
        )
      }
        .list().apply()
    }
  }
}

//select 'ДОПЛ' as type, 'exedopl' as typedocl from dual union
//select 'ПОЧС' as type, 'exehour' as typedocl from dual;
