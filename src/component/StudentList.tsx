import { Button, TableCell, TableHead,Table,TableRow,TableContainer,Paper} from "@material-ui/core";
import { useState,useContext, useEffect } from "react";
import { Student } from "./Student.type";
import "./StudentModal.style.css";
import StudentModal from "./StudentModal";
import {toast} from "react-toastify";
import { useGlobalContext } from "../context/GlobalState";
import {v4 as uuid} from 'uuid';
import { IState } from "../types";

// function useMedia(query) {
//   let [matches, setMatches] = useState(window.matchMedia(query).matches);

//   useEffect(() => {
//     let media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }

//     let listener = () => setMatches(media.matches);
//     media.addListener(listener);
//     return () => media.removeListener(listener);
//   }, [matches, query]);

//   return matches;
// }


type Props = {
  // list: Student[];
  onDeleteClickHnd: (data: Student) => void;
  onEdit: (data: Student) => void;
  studentinfo : Student [];
  setStudentinfo: (data : Student []) => void;
  // tableName : string ;
  values:string;
  editStudent: (student:Student) => void;
  removeStudent: (id: typeof uuid)=> void;
  currentState:IState
};

const StudentList = (props: Props) => {
  // let isMobileView = useMedia("(max-width: 400px)");
  // let isDeskstopView = useMedia("(min-width: 800px)");
  // const {currentState,removeStudent} = useGlobalContext();
  // const studentinfo = currentState.studentinfo

   console.log("===========================>"+props.studentinfo);
  // const {onDeleteClickHnd, onEdit} = props;
  const {onDeleteClickHnd, onEdit,currentState,studentinfo} = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as Student | null);
  // const studentinfo = currentState.studentinfo;
  // const [studentinfo ,setStudentinfo] =useState(null as Student[]);
  // useEffect(() => {
  //   return () => {
      
  // setStudentinfo(JSON.parse(localStorage.getItem("StudentList")));
  //   };
  // }, [])
  // const {removeUser,I } = useContext(GlobalContext);

  const viewStudent = (data: Student) => {
    setDataToShow(data);
    setShowModal(true);
   toast.success('Student info viewed');
    
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h2 className="list-header">Student List</h2>
      </article>
      <TableContainer component={Paper}>
      <Table style={{ minWidth: 550 }} aria-label="simple table">
        <TableRow style={{textAlign:"center"}}>
          <TableCell >Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
        {studentinfo.map((studentinfo) => {
          return (
            <TableRow key={studentinfo.id}>
              <TableCell>{`${studentinfo.firstName} ${studentinfo.lastName}`}</TableCell>
              <TableCell>{studentinfo.email}</TableCell>
              <TableCell>{studentinfo.phone}</TableCell>
              <TableCell>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    value="View"
                    onClick={() => viewStudent(studentinfo)}
                  >View</Button>
                  <Button
                   variant="contained"
                   color="inherit"
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(studentinfo)}
                    style={{margin:'5px'}}
                  >Update</Button>
                  <Button
                     variant="contained"
                     color="secondary"
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(studentinfo)}  
                    // onDeleteClickHnd
                    style={{margin:'5px'}}
                    
                  >Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          
          );
        })}
      </Table>
    </TableContainer>
      {showModal && dataToShow !== null && (
        <StudentModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default StudentList;
