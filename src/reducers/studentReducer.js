export default function studentReducer(state = {students: []}, action) {
  switch(action.type) {
    case 'FETCH_STUDENTS':
      return {students: action.payload}
      case 'ADD_STUDENT':
        return {...state, students: [...state.students, action.payload]}
        case 'ADD_EVALUATION':
          let students = state.students.map(student => {
            if (student.id === action.payload.studentId) {
              student.evaluations = [...student.evaluations, action.payload.evaluation]
              return student
            } else {
              return student
            }
          })
          return {...state, students: students}
        case 'DELETE_EVALUATION':
          let studentsTwo = state.students.map(student => {
            if (student.id === action.payload.studentId) {
              student.evaluations = student.evaluations.filter(evaluation => {
                return evaluation.id !== action.payload.evaluationId
              }) 
              return student
            } else {
              return student
            }
          })
          return {...state, students: studentsTwo}
        case 'EDIT_STUDENT':
          let studentsThree = state.students.map(student => {
            if (student.id === action.payload.id) {
              return action.payload
            } else {
              return student
            }
          })
          return {...state, students: studentsThree}
        default:
        return state
  }
}
