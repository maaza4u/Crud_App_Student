import React from 'react';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Student } from './Student.type';
import EditStudent from './EditStudent';

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
      const component = shallow( <EditStudent data={data} onUpdateClickHnd={jest.fn()} onBackBtnClickHnd={jest.fn()} studentinfo={[]} setStudentinfo={jest.fn()} currentState={function (): void {
        throw new Error('Function not implemented.');
      } }  />);
      expect(component.length).toBe(1);
    });
  });