import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import taskReducer from "./tasksReducer";

const rootReducers = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  authReducer,
  taskReducer,
});

export default rootReducers;
