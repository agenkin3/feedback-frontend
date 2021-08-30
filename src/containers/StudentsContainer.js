import React from 'react'
import { connect } from 'react-redux'
import Students from '../components/Students'
import {fetchStudents} from '../actions/fetchStudents'
import StudentInput from '../components/Studentinput'

//import Student from '.../components/Student'

class StudentsContainer extends React.Component {
  
componentDidMount() {
  this.props.fetchStudents()
}

render () {
  return (
    <div>
      <StudentInput/> <br></br>
      <Students students={this.props.students}/>

    </div>

  )
}
}

const mapStateToProps = state => {
return{
  students: state.students
}
}

export default connect(mapStateToProps, {fetchStudents})(StudentsContainer)