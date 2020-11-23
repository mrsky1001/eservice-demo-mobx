package edu.omsu.eservice.dao

import edu.omsu.eservice.entities.{SearchParams, StudyProgram}


trait Dao {
  def findPersonIdByLogin(username: String): Option[Long]

  def studyPrograms(personId: Long, searchParams: SearchParams): List[StudyProgram]
}
