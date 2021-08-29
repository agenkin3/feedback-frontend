export function fetchStudents() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/students')
    .then (resp => resp.json())
    .then (students => dispatch({
      type: 'FETCH_STUDENTS',
      payload: students
    }))
  }
}