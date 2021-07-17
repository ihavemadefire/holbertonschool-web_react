import React from 'react'
import { getFullYear, getFooterCopy, getLatestNotification } from '../utils/utils';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';


function App({ isLoggedIn }) {

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
        {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
      </body>
      <hr />
    <Footer />
    </div>
  );
}


App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
