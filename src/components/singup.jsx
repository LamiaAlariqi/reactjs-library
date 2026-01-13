import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="row justify-content-center w-100">
        <div className="col-11 col-sm-9 col-md-7 col-lg-5">

          <div className="text-center mb-5" style={{ paddingTop: '100px' }}>
            <h1 className="fw-bold display-6 mb-2"><span className="text-gradient">Create Account</span></h1>
            <p className="text-secondary">Join our library community today</p>
          </div>

          <div className="glass-panel p-4 p-md-5 rounded-4">
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label text-light fw-medium small">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John"
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <label className="form-label text-light fw-medium small">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-light fw-medium small">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-light fw-medium small">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                />
                <div className="form-text text-secondary opacity-75" style={{ fontSize: '0.75rem' }}>
                  Must be at least 8 characters long.
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-light fw-medium small">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                />
              </div>

              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input bg-transparent border-secondary" id="terms" />
                <label className="form-check-label text-secondary small" htmlFor="terms">
                  I agree to the <span className="text-primary cursor-pointer">Terms of Service</span> and <span className="text-primary">Privacy Policy</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold shadow-sm mb-4">
                Create My Account
              </button>

              <div className="text-center">
                <p className="text-secondary small">
                  Already have an account?{" "}
                  <NavLink to="/login" className="text-primary fw-bold text-decoration-none border-bottom border-primary">
                    Log In
                  </NavLink>
                </p>
              </div>
            </form>
          </div>

          <div className="mt-5 d-flex justify-content-center gap-4 opacity-50">
            <i className="bi bi-shield-check text-secondary small"> Secure Registration</i>
            <i className="bi bi-patch-check text-secondary small"> Instant Access</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;