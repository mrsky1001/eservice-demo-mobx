package edu.omsu.eservice.entities

case class DemoEntity(id: Long,
                      number: String,
                      fio: String,
                      group: String)

case class StudyProgram(personId: Long,
                        sspId2: Long,
                        studentName: String,
                        numberGroup: String,
                        speciality: String,
                        faculty: String,
                        form: String,
                        studyTime: String,
                        course: String,
                        financing: String)

case class SearchParams(studentName: Option[String],
                        numberGroup: Option[String])