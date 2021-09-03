import React from 'react'
import {connect} from 'react-redux'
import {addEvaluation} from '../actions/addEvaluation'

class EvaluationInput extends React.Component {

  state = {
    attending: '',
    rating: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.addEvaluation(this.state, this.props.student.id)
      this.setState({
        attending: '',
        rating: '',
        competency: ''
      })
  }



render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <label>Attending:</label>
          <input type="text" name="attending" value={this.state.attending} onChange={this.handleChange}/>
          <label>Comment:</label>
          <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange}/>
          <label>Competency:</label>
          
          <select name="competency" value={this.state.competency} onChange={this.handleChange}>
            <option>Medical Knowledge </option>
            <option>Patient Care</option>
            <option>Communication</option>
            <option>Professionalism</option>
            <option>Systems-Based Practice</option>
          </select>

          <label>Rating:</label>
          <select name="rating" value={this.state.rating} onChange={this.handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          
          <input type="submit"/>
        </form>
    </div>
  )
}
}

export default connect(null, {addEvaluation})(EvaluationInput)