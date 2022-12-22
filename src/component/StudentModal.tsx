import { FormLabel } from "@material-ui/core";
import { Student } from "./Student.type";
import "./StudentModal.style.css";

type Props = {
  onClose: () => void;
  data: Student;
};

const StudentModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Student Data</h3>
        <div>
          <div>
            <FormLabel>First Name : {data.firstName}</FormLabel>
          </div>
          <div>
            <FormLabel>Last Name : {data.lastName}</FormLabel>
          </div>
          <div>
            <FormLabel>Email Add. : {data.email}</FormLabel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
