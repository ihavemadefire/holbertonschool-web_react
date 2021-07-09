import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
    it('App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists());
    });
});