import {v4 as uuid} from 'uuid';
export interface Student {
    id:any | typeof uuid;
    firstName:string;
    lastName:string;
    email:string;
    phone:string
}

export interface IParams {
    id:any;
}

export interface IState {
    students: Student[];
    // studentinfo: Student[];
}



export interface IAction {
    type: string;
    payload:any;
}


export enum ActionTypes {
  REMOVE_STUDENT = 'REMOVE_STUDENT',
  ADD_STUDENT = 'ADD_STUDENT',
  EDIT_STUDENT = 'EDIT_STUDENT',

}

