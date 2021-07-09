import React from 'react';
import './App.css';
import './App.test';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
        <div id='root-notifications'>
          {Notifications()}
        </div>
      <Header />
      <body className="App-body">
        <Login />
      </body>
    <Footer />
    </div>
  );
}

export default App;
