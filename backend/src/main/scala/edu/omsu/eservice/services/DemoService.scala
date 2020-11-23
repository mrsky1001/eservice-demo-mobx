package edu.omsu.eservice.services

import edu.omsu.eservice.dao.OracleDao
import edu.omsu.eservice.entities.{SearchParams, StudyProgram}

object DemoService {
  def getList(personId: Long, searchParams: SearchParams): List[StudyProgram] = {
    OracleDao.studyPrograms(personId, searchParams)
  }

  def getTestList(searchParams: SearchParams): List[StudyProgram] = {
    List(StudyProgram(0,0, "Джонсон Джон Абрахамович", "МБР", "Компьютерная безопасность", "Факультет компьютерных наук", "Очная", "", "", ""),
      StudyProgram(1,1, "Рюрик2 Роберт Арбатович", "МБР2", "Компьютерная безопасность", "Факультет компьютерных наук", "Очная", "", "", ""),
      StudyProgram(2,2, "Рюрик3 Роберт Арбатович", "МБР2", "Компьютерная безопасность", "Факультет компьютерных наук", "Очная", "", "", ""),
      StudyProgram(3,3, "Рюри4 Роберт Арбатович", "МБР2", "Компьютерная безопасность", "Факультет компьютерных наук", "Очная", "", "", ""),
      StudyProgram(4,4, "Рюрик5 Роберт Арбатович", "МБР2", "Компьютерная безопасность", "Факультет компьютерных наук", "Очная", "", "", ""))
      .filter(elem => searchParams.studentName.isDefined && elem.studentName.contains(searchParams.studentName.get) || searchParams.studentName.getOrElse("").isEmpty)
      .filter(elem => searchParams.numberGroup.isDefined && elem.numberGroup.contains(searchParams.numberGroup.get) || searchParams.numberGroup.getOrElse("").isEmpty)
  }
}