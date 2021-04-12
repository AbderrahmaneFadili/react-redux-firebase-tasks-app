//Sign In (Log in)
export const signIn = (email, password) => (
  dispatch,
  getState,
  { getFirebase },
) => {
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(email, password);
};

//Sign Out (Log out)
export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signOut();
};

//sign up (Register)
export const signUp = (email, password) => (
  dispatch,
  getState,
  { getFirebase },
) => {
  const firebase = getFirebase();
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
