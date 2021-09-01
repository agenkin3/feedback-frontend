import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Students from '../components/Students'
import Student from '../components/Student'
import {fetchStudents} from '../actions/fetchStudents'
import StudentInput from '../components/StudentInput'

class StudentsContainer extends React.Component {
  
componentDidMount() {
  this.props.fetchStudents()
}

render () {
  return (
    <div>
      <Route path='/students/new' component={StudentInput}/>
      <Route path='/students/:id' render={(routerProps) => <Student {...routerProps} students={this.props.students}/>}/>
      <Route exact path='/students' render={(routerProps) => <Students {...routerProps} students={this.props.students}/> }/>
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