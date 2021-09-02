import React from 'react'
import {Link} from 'react-router-dom'

const Students = (props) => {

  return (
    <div>
      {props.students.map(student => 
      <div key={student.id}>
  <Link to={`/students/${student.id}`}>{student.name} - - {student.category} - Year {student.year} </Link>
      </div>)}
      </div>
  )
}

export default Students