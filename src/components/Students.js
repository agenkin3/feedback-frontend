import React from 'react'

const Students = (props) => {

  return (
    <div>
      {props.students.map(student => <li key={student.id}> {student.name} - {student.year}- {student.category}</li>)}
    </div>
  )
}

export default Students