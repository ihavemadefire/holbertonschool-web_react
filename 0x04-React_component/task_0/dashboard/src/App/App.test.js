import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList'


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

  it(' <CourseList /> not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
	});

  it('component when isLoggedIn=true', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
	});
});
