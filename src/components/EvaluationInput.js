import React from 'react'

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


render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <label>Attending:</label>
          <input type="text" name="attending" value={this.state.attending} onChange={this.handleChange}/>
          <label>Comment:</label>
          <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange}/>
          <label>Competency:</label>
          <select name="compentency" value={this.state.competency} onChange={this.handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
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


export default EvaluationInput