import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider, useSelector } from "react-redux";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
//importing the css library of boostrap.css
import "bootstrap/dist/css/bootstrap.css";
import store, { rrfProps } from "./redux";

//Detect whether data from redux state is loaded yet or not

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  } else {
    return children;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root"),
);
