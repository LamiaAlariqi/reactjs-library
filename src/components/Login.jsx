import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const TakeEmail = (e) => {
    // setEmail(e.target.value);
    console.log(e.target.email)
  }

  function TakePassword(e) {
    // setPassword(e.target.value);
    console.log(e.target.password);
  }

  const submitform = (e) => {
    console.log(email, password);

  }
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="row justify-content-center w-100">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">

          <div className="text-center mb-5" style={{ paddingTop: '100px' }}>
            <h1 className="fw-bold display-6 mb-2"><span className="text-gradient">Welcome Back</span></h1>
            <p className="text-secondary">Please enter your details to sign in</p>
          </div>

          <div className="glass-panel rounded-4 p-4 p-md-5">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="form-label text-light fw-medium">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={TakeEmail}
                />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label text-light fw-medium">
                    Password
                  </label>
                  <NavLink to="/forgot-password" size="sm" className="text-primary text-decoration-none small">
                    Forgot?
                  </NavLink>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={TakePassword}
                />
              </div>

              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input bg-transparent border-secondary" id="remember" />
                <label className="form-check-label text-secondary small" htmlFor="remember">
                  Remember me for 30 days
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold shadow mb-4" onClick={submitform}>
                Sign In
              </button>

              <div className="text-center mt-3">
                <p className="text-secondary small">
                  Don't have an account?{" "}
                  <NavLink to="/signup" className="text-primary fw-bold text-decoration-none border-bottom border-primary">
                    Create account
                  </NavLink>
                </p>
              </div>
            </form>
          </div>

          <div className="mt-5 text-center">
            <p className="text-secondary opacity-75 small">
              &copy; 2026 My Library Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




/*import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const TakeEmail = (e) => {
    setEmail(e.target.value)
  }

  const submitForm = () => {
    console.log(email,password);
    
  }
  return (
    <div>
      <div className="container">
        <div className="form text-center">
        <form action="">
          <label htmlFor="">Enter Your Email</label> <br />
          <input type="email" placeholder='Enter your email' value={email} onChange={TakeEmail}/> <br />
          <label htmlFor="">Enter Your Password</label> <br />
          <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </form>
        <button className='btn btn-warning' onClick={submitForm}>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Signup


// onChange event */