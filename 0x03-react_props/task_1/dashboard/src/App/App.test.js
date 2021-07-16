import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


describe('<App />', () => {
    it('App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists());
    });

    it('Notification renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).exists());
    });

    it('Header renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).exists());
    });
    it('Login renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).exists());
    });
    it('Footer renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).exists());
    });
});
