export default function studentReducer(state = {students: []}, action) {
  switch(action.type) {
    case 'FETCH_STUDENTS':
      return {students: action.payload}
      case 'ADD_STUDENT':
        return {...state, students: [...state.students, action.payload]}
      default:
        return state
  }
}
