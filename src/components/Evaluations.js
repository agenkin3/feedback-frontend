import React from 'react'
import {connect} from 'react-redux'
import {deleteEvaluation} from '../actions/deleteEvaluation'

class Evaluations extends React.Component {

state = {}

 handleDelete = (evaluation) => {
    this.props.deleteEvaluation(evaluation.id, evaluation.student_id)
  }

vote = (id) => {
  this.state[id] ? this.setState({[id]: this.state[id] + 1}) : this.setState({[id]: 1})
}

render() {
  return (
      <div>
        {this.props.evaluations && this.props.evaluations.map(evaluation =>
          <li key={evaluation.id}>{evaluation.rating} - {evaluation.competency} - {evaluation.comment} - Evaluator: {evaluation.attending} -  <button onClick={() => this.vote(evaluation.id)}>Agree {this.state[evaluation.id] ? this.state[evaluation.id] : 0}</button><button onClick={() => this.handleDelete(evaluation)}>Delete</button></li>
        )}
      </div>
    )
  }
}

export default connect(null, {deleteEvaluation})(Evaluations)