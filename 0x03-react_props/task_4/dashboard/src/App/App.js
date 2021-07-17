import React from 'react'
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';


function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Notifications />
      <Header /> 
      <hr />
      <body className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
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
