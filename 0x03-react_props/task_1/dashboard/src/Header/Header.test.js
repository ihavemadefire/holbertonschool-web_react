import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';


describe('<Header />', () => {
    it('Header renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists());
    });

    it('render Header; check contents', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('header.App-header h1').exists());
        expect(wrapper.find('header.App-header img').exists());
        });
});