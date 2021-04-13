import React, { useState } from "react";
import { Redirect } from "react-router-dom";
const SignUp = (props) => {
  console.log(props);
  const [values, setValues] = useState({
    txtEmail: "",
    txtPassword: "",
  });

  //handle Value Change
  const handleValueChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  //handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.txtEmail, values.txtPassword);
    props.signUp(values.txtEmail, values.txtPassword);
  };

  if (props.uid) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="container my-5">
        <legend>
          <h4>Sign In</h4>
        </legend>
        <form autoCapitalize={"off"} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="txtEmail">Email address</label>
            <input
              type="email"
              onChange={handleValueChange}
              className="form-control"
              id="txtEmail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtPassword">Password</label>
            <input
              onChange={handleValueChange}
              type="password"
              className="form-control"
              id="txtPassword"
            />
          </div>

          <button type="submit" className="btn btn-dark">
            Sign up
          </button>
        </form>
      </div>
    );
  }
};

export default SignUp;
