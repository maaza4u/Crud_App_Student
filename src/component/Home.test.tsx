import React from 'react';
import { shallow } from "enzyme";
import Home from './Home';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


describe('<StatementsListContainer/>', () => {
    it('should shallow render without crashing', () => {
      const component = shallow( <Home />);
      expect(component.length).toBe(1);
    });
  });