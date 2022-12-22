
import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import {v4 as uuid} from 'uuid';
import { Student } from '../types'

interface IGlobalContextData {
  currentState: {students : Student[]};
  dispatch: Dispatch <{type:string; payload:Student}>;
  removeStudent: (id: typeof uuid)=> void;
  addStudent: (student:Student) => void;
  editStudent: (student:Student) => void;

}



const initialstate = {
 students:[],
}






// type Props = {
//   addStudent: () => void;
//   removeStudent:()=>void;
//   editStudent:()=>void;



// }


// Create Context
 const GlobalState = createContext({} as IGlobalContextData);

// Provider Component
export const GlobalContext = ( {children}) => {
  const [currentState, dispatch] = useReducer(AppReducer,initialstate);



  // Actions
  const removeStudent = (id: typeof uuid) => {
   
    dispatch({
      type: 'REMOVE_STUDENT' ,
      payload: id
    })
  }

  // const viewUser = (id) => {
  //   dispatch({
  //     type: 'VIEW_USER',
  //     payload: id
  //   })
  // }

  const addStudent = (student:Student) => {
    
    dispatch({
      type: 'ADD_STUDENT',
      payload: student,
      
    })
    
  }

  const editStudent = (student:Student) => {
    dispatch({
      type: 'EDIT_STUDENT',
      payload: student
    })
  }

  return (
    <GlobalState.Provider value={{ 
      currentState,
      dispatch,
      addStudent,
      editStudent,
      removeStudent
  }}>
      {children}
      
    </GlobalState.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalState);
  if (!context) 
  throw new Error (
    'useGlobalContext must be used within a GlobalContextProvider'
  )
}