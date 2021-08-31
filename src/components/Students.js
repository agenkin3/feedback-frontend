import React from 'react'
import Student from './Student'
import {Route, Link} from 'react-router-dom'

const Students = (props) => {

  return (
    <div>
      {props.students.map(student => 
      <div key={student.id}>
    <Link path={'/students/:id'}>{student.name}</Link> 
      </div>)}
      </div>
  )
}

export default Students