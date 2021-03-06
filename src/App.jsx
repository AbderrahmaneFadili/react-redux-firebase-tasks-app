import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn/";
import SignUp from "./components/auth/SignUp/";
import Dashboard from "./components/dashboard/DashBoard";
import NavBar from "./components/Layout/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
