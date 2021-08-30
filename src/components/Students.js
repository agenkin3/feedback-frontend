import React from 'react'
import Student from './Student'
import {Route, Link} from 'react-router-dom'

const Students = (props) => {

  return (
    <div>
      {props.students.map(student => 
      <li key={student.id}>
    <Link to={`/students/${student.id}`}>{student.name} - ${student.year}</Link>
    </li>)}
    </div>
  )
}

export default Students