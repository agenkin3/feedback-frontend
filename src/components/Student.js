//shows specific student

import React from 'react'

const Student = (props) => {
return (
  <li>
    {props.student.name} - {props.student.year}
  </li>
)
}

export default Student