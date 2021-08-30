import React from 'react'
import {connect} from 'react-redux'
import {addStudent} from '../actions/addStudent'

class StudentInput extends React.Component {

  state = {
  name: '', 
  year: '',
  category: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addStudent(this.state)
    this.setState({
      name: '',
      year: '',
      category: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>  <br></br>
          <label>Year:</label>
          <input type='text' placeholder='Year' value={this.state.year} name="year"onChange={this.handleChange}/> <br></br>
          <label>Category:</label> 
          <input type='text' placeholder='Category' value={this.state.category} name="category" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addStudent})(StudentInput)

