import { useState ,useContext} from "react"
import "./StudentModal.style.css";
// import { toastError } from "./Toastifyconfig";
import {  useGlobalContext } from "../context/GlobalState";
import { Button, FormLabel, Grid, Input} from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { makeStyles } from "@material-ui/styles";
import { useFormik } from "formik";
import { schemaValidation } from "./validationschema";
import { Student } from "../types";
import {v4 as uuid} from 'uuid';






const initialValues : Student = {
  id: uuid(),
  firstName:'',
  lastName:'',
  email:'',
  phone:''
}


type Props = {
  // onSubmitClickHnd:(data: Student) => void;
  onBackBtnClickHnd: () => void;
  handleSubmit
  studentinfo : Student [];
  setStudentinfo: (data : Student []) => void;
  addStudent: (student:Student) => void;
 
};

const AddStudent = (props: Props) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const { addStudent, } = useContext(GlobalContext);
  const { studentinfo,setStudentinfo,onBackBtnClickHnd,addStudent} = props;
  
  // const {''} = useGlobalContext();
  // const [studentinfo, setStudentinfo] = useState([] as Student[]);
  // const onFirstNameChangeHnd = (e: any) => {
  //   setFirstName(e.target.values);
  // };

  // const onLastNameChangeHnd = (e: any) => {
  //   setLastName(e.target.value);
  // };

  // const onEmailChangeHnd = (e: any) => {
  //   setEmail(e.target.value);
  // };

  // const onPhoneChange = (e: any) => {
  //   setPhone(e.target.value);
  // };

  const onSubmitClick =(e:any)=> {
  toast.success("Student Added Succesfully");
  const initialValues : Student = {
    id: uuid(),
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }
    addStudent(initialValues);
  }


  // const onSubmitBtnClickHnd = (e: any) => {
  //   e.preventDefault();
     
  //   const data: Student = {
  //     id: new Date().toJSON().toString(),
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     phone:phone
      
  //   };
  //   onSubmitClickHnd(data);
  //   onBackBtnClickHnd();
  //   toast.success("Student Added Succesfully");
  //  };

   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    // validateOnMount:true,
    validationSchema: schemaValidation,
    // enableReinitialize:true,
    onSubmit: (values, action) => {
  
      values.id = studentinfo.length + 1;
    
      setStudentinfo([...studentinfo,values])
      // onSubmitClickHnd(values);
      onBackBtnClickHnd();
      console.log(
        "valueone",
        studentinfo
      );
      action.resetForm();
      addStudent(initialValues);
    

    },
  });




// const useStyles = makeStyles({
//   errorStyle: {
//     color: "red",
//     fontSize: "12px"
//   },
//   buttonStyle: {
//     width: "15%",
//     fontSize: "10px"
//   }
// });
// const classes = useStyles();

// const validateSchema = Yup.object({
//   name: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required(),
//   username: Yup.string()
//     .max(20, "Must be 20 characters or less")
//     .required('School name is Required'),
//   email: Yup.string()
//      .email('Email is invalid')
//      .min(8,'min 8 characters or more')
//     .required(),
//   phone: Yup.number()
//      .min(10)
//     .positive()
//     .integer()
//     .required(),
//   address: Yup.string()
//     .min(6, "Address must be at least 6 charaters")
//     .required()
 


// });



 

  return (

//     <Formik
//     initialValues={{
//       name: "",
//       username: "",
//       email: "",
//       phone: ""
//     }}
   
//      validationSchema={validateSchema}
//      validateOnMount={false}
//      validateOnChange={true}
//     onSubmit={(value,{setSubmitting}) => {
//       console.log(value);
//       setSubmitting(true);
//     }}
  
//   >

// {formik => (
//         console.log('Form Data',formik),
     <Grid>
     <div className="form-container">
      <div>
        <h2>Add Student Info</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <FormLabel>First Name : </FormLabel>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete='of' 
            required
  
          />
           <div>
          {touched.firstName && errors.firstName ? (
            <div style={{color:'red',fontSize:'15px',width:'15%',paddingLeft:'450px',paddingTop:'10px'}} >{errors.firstName}</div>
          ) : null}
        </div>
        
       
        </div>
        <div>
          <FormLabel>Last Name : </FormLabel>
          <Input 
          type="text" 
          id="lastName"
          name="lastName"
          value={values.lastName} 
          onChange={handleChange}
          onBlur={handleBlur}
           autoComplete='of' 
           required />
             <div>
          {touched.lastName && errors.lastName ? (
            <div style={{color:'red',fontSize:'15px',width:'15%',paddingLeft:'450px',paddingTop:'10px'}}>{errors.lastName}</div>
          ) : null}
        </div>


        </div>
        <div>
          <FormLabel>Email  : </FormLabel>
          <Input 
          type="text" 
          id="email"
          name="email"
          value={values.email} 
          onChange={handleChange} 
          onBlur={handleBlur}
          autoComplete='of' 
          required />
              <div>
          {touched.email && errors.email ? (
            <div style={{color:'red',fontSize:'15px',width:'15%',paddingLeft:'450px',paddingTop:'10px'}}>{errors.email}</div>
          ) : null}
        </div>
        </div>
        <div>
          <FormLabel>Phone  : </FormLabel>
          <Input 
          type="text"
          id="phone"
          name="phone"
          value={values.phone} 
          onChange={handleChange} 
          onBlur={handleBlur}
          autoComplete='of' 
          required />
        </div>
        <div>
          {touched.phone && errors.phone ? (
            <div style={{color:'red',fontSize:'15px',width:'15%',paddingLeft:'450px',paddingTop:'10px'}}>{errors.phone}</div>
          ) : null}
        </div>
        <div>
          <br></br>
          <Button type="submit" value="Add Student" variant="contained" color="primary" onClick={onSubmitClick}>Submit</Button>
          <Button type="button" value="Back" variant="contained" color="secondary"  onClick={onBackBtnClickHnd} style={{margin:'5px'}}> Cancel</Button>
        </div>
      </form>
    </div>
    </Grid>
  );
};

export default AddStudent;


