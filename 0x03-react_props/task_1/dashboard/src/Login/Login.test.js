import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


describe('<Login />', () => {
    it('App renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists());
    });

    it('renders Login; checks contents', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});