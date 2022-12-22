import { useEffect, useState } from "react";
import EditStudent from "./EditStudent";
import { Student, PageEnum } from "./Student.type";
import StudentList from "./StudentList";
import "./Home.style.css";
import { Button } from "@material-ui/core";
import AddStudent from "./AddStudent";
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify";
import { V4Options } from "uuid";



const Home = () => {
  // const [studentList, setStudentList] = useState([] as Student[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as Student);
  const [studentinfo, setStudentinfo] = useState([] as Student[]);

  useEffect(() => {
    const listInString = window.localStorage.getItem("studentinfo");
    if (listInString) {
      _setStudentinfo(JSON.parse(listInString));
    }
  }, []);

  const onAddStudentClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  // const _setStudentList = (list: Student[]) => {
    
  const _setStudentinfo = (list: Student[]) => {
    // setStudentList(list);
    setStudentinfo(list);
    window.localStorage.setItem("studentinfo", JSON.stringify(list));
  };

  const addStudent = (data: Student) => {
    // _setStudentList([...studentList, data]);
     setStudentinfo([...studentinfo,data]);
  };

  const deleteStudent = (data: Student) => {
    // To Index from array i,e employeeList
    // Splice that
    // Update new record

    // const indexToDelete = studentList.indexOf(data);
    // const tempList = [...studentList];
    const indexToDelete = studentinfo.indexOf(data);
    const tempList = [...studentinfo];
    tempList.splice(indexToDelete, 1);
    // _setStudentList(tempList);
     setStudentinfo(tempList);
    toast.success("Student info deleted successfully")
  };

  const editStudentData = (data: Student) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: Student) => {
    const filteredData = studentinfo.filter((x) => x.id === data.id)[0];
    const indexOfRecord = studentinfo.indexOf(filteredData);
    const tempData = [...studentinfo];
    tempData[indexOfRecord] = data;
    // _setStudentList(tempData);
    setStudentinfo(tempData)
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>Student INFO</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
             <Button variant="contained" color="primary" 
              type="button"
              value="Add Student"
              onClick={onAddStudentClickHnd}
              className="add-employee-btn"
             >
              Add Student
             </Button>
            <StudentList
              // list={studentinfo}
              studentinfo={studentinfo}
              setStudentinfo={setStudentinfo}
              onDeleteClickHnd={deleteStudent}
              onEdit={editStudentData} values={""} />
          </>  
        )}

        {shownPage === PageEnum.add && (
      
          <AddStudent
            onBackBtnClickHnd={showListPage}
            handleSubmit={addStudent}
            studentinfo={studentinfo}
            setStudentinfo={setStudentinfo} addStudent={function (student: Student): void {
              throw new Error("Function not implemented.");
            } }  />
          
        )}

        {shownPage === PageEnum.edit && (
          <EditStudent
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
            studentinfo={studentinfo}
            setStudentinfo={setStudentinfo}  />
        )}
      </section>
    </>
  );
};

export default Home;
