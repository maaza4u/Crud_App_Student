import {IState,IAction,ActionTypes} from '../types'




export const AppReducer = (currentState:IState, action:IAction) => {
  switch (action.type) {
    case ActionTypes.REMOVE_STUDENT:
      return {
        ...currentState,
        students: currentState.students.filter(student => {
          return student.id !== action.payload;
        })
      }
      
    case ActionTypes.ADD_STUDENT:
      return {
        ...currentState,
        students: [action.payload, ...currentState.students]
      }
    case ActionTypes.EDIT_STUDENT:
      const updateUser = action.payload;

      const updateUsers = currentState.students.map(student => {
        if (student.id === updateUser.id) {
          return updateUser;
        }
        return student;
      })
      return {
        ...currentState,
        students: updateUsers
      }

    default:
      return currentState;
  }
}