import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import StudentList from './StudentList';
import { Student } from './Student.type';

configure({ adapter: new Adapter() });


describe('<StatementsListContainer/>', () => {
    it('should shallow render without crashing', () => {
        const data:Student = {
          id :3,
          phone:"",
          firstName: "",
          lastName: "",
          email: "",    
        };
      const component = shallow( <StudentList  onDeleteClickHnd={jest.fn()} onEdit={jest.fn()} studentinfo={[]} setStudentinfo={function (data: Student[]): void {
        throw new Error('Function not implemented.');
      } } values={''}  />);
      expect(component.length).toBe(1);
    });
  });