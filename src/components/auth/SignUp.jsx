import React from "react";

const SignUp = () => {
  return (
    <div className="container my-5">
      <legend>
        <h4>Sign In</h4>
      </legend>
      <form autoCapitalize={"off"}>
        <div className="form-group">
          <label htmlFor="txtEmail">Email address</label>
          <input type="email" className="form-control" id="txtEmail" />
        </div>
        <div className="form-group">
          <label htmlFor="txtPassword">Password</label>
          <input type="password" className="form-control" id="txtPassword" />
        </div>

        <button type="submit" className="btn btn-dark">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
