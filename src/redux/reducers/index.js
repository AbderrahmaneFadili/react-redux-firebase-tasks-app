import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  authReducer,
});

export default rootReducers;
