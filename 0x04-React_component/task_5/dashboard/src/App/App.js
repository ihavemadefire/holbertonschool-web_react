import React, { Component } from 'react';
import {getLatestNotification } from '../utils/utils';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";


class App extends Component {
  constructor(props) { super(props); }
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  }
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const listCourses = [
      {id: 1, name: "ES6", credit: 60},
      {id: 2, name: "Webpack", credit: 20},
      {id: 3, name: "React", credit: 40}
    ]
    const payload = {__html: getLatestNotification()}
    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: payload}
    ];

    return (
      <div className="App">
        <Notifications listNotifications={listNotifications}/>
        <Header /> 
        <hr />
        <body className="App-body">
          {this.props.isLoggedIn ? 
          (<BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>)
          : (<BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Proud to be a Seahorse!</p>
          </BodySection>
        </body>
        <hr />
      <Footer />
      </div>
    );
  }
}

export default App;
