export const addEvaluation = (evaluation, studentId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/students/${studentId}/evaluations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(evaluation)
    })
    .then(response => response.json())
    .then(evaluation => {
        if (evaluation.error) {
          alert(evaluation.error)
        } else {
          dispatch({type: 'ADD_EVALUATION', payload: {evaluation, studentId}})
        }
      }
    )
  }
}