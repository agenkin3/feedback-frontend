//shows specific student
import React from 'react'
import {Redirect} from 'react-router-dom'
import StudentEdit from './StudentEdit'
import EvaluationsContainer from '../containers/EvaluationsContainer'

const Student = (props) => {

  let student = props.students.filter(student => student.id == props.match.params.id)[0]
  
  console.log(student)
  
  return (
    <div>
    <h2>
      {student ? student.name : null} - {student ? student.category : null} - {student ? student.year : null}  
    </h2>
    <EvaluationsContainer student={student}/><br/>
    <h4>Edit Student</h4>
    <StudentEdit student={student}/>
  </div>
)


}

export default Student
