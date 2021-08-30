import React from 'react'
import {connect} from 'react-redux'
import {editStudent} from '../actions/editStudent'

class StudentEdit extends React.Component {

  state = {
    name: '',
    year: '',
    category: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let student = {...this.state, id: this.props.student.id}
    this.props.editStudent(student)
    this.setState({
      name: '',
      year: '',
      category: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Year: </label>
          <input type='float' placeholder='Year' value={this.state.year} name="year" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

StudentEdit.defaultProps = {
  students: {}
}


export default connect(null, {editStudent})(StudentEdit)