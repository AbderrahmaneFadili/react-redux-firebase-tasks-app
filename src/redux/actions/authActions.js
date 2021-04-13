import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_ERR,
  SIGN_UP,
  SIGN_UP_ERR,
} from "../types/authTypes";

//Sign In (Log in)
export const signIn = (email, password) => (
  dispatch,
  getState,
  { getFirebase },
) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => dispatch({ type: SIGN_IN }))
    .catch((error) => dispatch({ type: SIGN_IN_ERR, payload: error.message }));
};

//Sign Out (Log out)
export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signOut()
    .then((result) => dispatch({ type: SIGN_OUT }));
};

//sign up (Register)
export const signUp = (email, password) => (
  dispatch,
  getState,
  { getFirebase },
) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => dispatch({ type: SIGN_UP }))
    .catch((error) => dispatch({ type: SIGN_UP_ERR, payload: error.message }));
};
