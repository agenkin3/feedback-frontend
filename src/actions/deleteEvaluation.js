export const deleteEvaluation = (evaluationId, studentId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/students/${studentId}/evaluations/${evaluationId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(student => dispatch({type: 'DELETE_EVALUATION', payload: studentId}))
  }
}