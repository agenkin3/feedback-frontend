import React from 'react'
import EvaluationInput from '../components/EvaluationInput'
import Evaluations from '../components/Evaluations'

class EvaluationsContainer extends React.Component {
  render() {
    return (
      <div>
          <EvaluationInput student={this.props.student}/><br/>
          <Evaluations evaluations={this.props.student && this.props.student.evaluations}/>
      </div>

    )

  }

}
export default EvaluationsContainer


//does this need a Switch statement?