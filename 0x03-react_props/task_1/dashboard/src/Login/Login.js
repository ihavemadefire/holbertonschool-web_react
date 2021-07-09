import React from 'react';
import './Login.css';

function Login() {
    return (
        <div >
            <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email: </label>
          <input type="email" id="email"></input>
          <label for="password">Password: </label>
          <input type="password" id="password"></input>
          <button>OK</button>
        </form>
        </div>
    );
}

export default Login;