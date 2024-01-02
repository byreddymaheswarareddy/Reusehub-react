import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container-fluid body p-md-5 text-center " style={{ marginTop: '150px', paddingBottom: '80px' }}>
      <div className="container-fluid bg-black p-4 text-white">
        <Link to="/home">
          <img className="login-form" src="asserts/REUSEHUB.jpg" alt="Logo" />
        </Link>
        <div className="login-form">
          <h1>Login</h1>
          <input type="text" placeholder="User Name" />
          <input type="password" placeholder="Password" />
          <button type="button" onClick={() => Login()}>Sign In</button>
        </div>
        <h6>Forgot password: <Link to="/forgotpassword">Click here</Link></h6>
        <h5>Don't have an account: <Link to="/signup">Create New Account</Link></h5>
      </div>
    </div>
  );
}

export default Login;
