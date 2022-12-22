import { useState,useContext } from "react";
import { Student } from "./Student.type";
import "./StudentForm.style.css";
import { GlobalContext } from "../context/GlobalState";
import { Button, FormLabel, Input } from "@material-ui/core";
import {toast} from "react-toastify";
import { useFormik } from "formik";


const initialValues : Student = {
  id: '',
  firstName:'',
  lastName:'',
  email:'',
  phone:''
}



type Props = {
  data: Student;
  studentinfo : Student [];
  setStudentinfo: (data : Student []) => void;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: Student) => void;
  currentState:()=>void

  

};

const EditStudent = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd,studentinfo,setStudentinfo} = props;

 
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  // const {currentState,editUser} = GlobalContext;
  // const   = currentState.students;

  // const [editUser, Student] = useContext(GlobalContext);
  // const { editStudent, students } = useContext(GlobalContext);

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onPhoneChange = (e: any) => {
    setPhone(e.target.value);
  };


  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: Student  = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone:phone
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
    toast.success("Student info Update Succesfully");
    // editStudent(updatedData);
    // editUser(updatedData,students);
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Student Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <FormLabel>First Name : </FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
            autoComplete='of'
            required
          />
        </div>
        <div>
          <FormLabel>Last Name : </FormLabel>
          <Input type="text" value={lastName} onChange={onLastNameChangeHnd} autoComplete='of'
            required />
        </div>
        <div>
          <FormLabel>Email  : </FormLabel>
          <Input type="text" value={email} onChange={onEmailChangeHnd}autoComplete='of'
            required />
        </div>
        <div>
          <FormLabel>Phone  : </FormLabel>
          <Input type="text" value={phone} onChange={onPhoneChange}autoComplete='of'
            required />
        </div>
        <div>
          
          <Button type="submit" value="Update Student" variant="contained" color="primary" style={{margin:'5px'}}>Update</Button>
          <Button type="button" value="Back" variant="contained" color="secondary" onClick={onBackBtnClickHnd}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
