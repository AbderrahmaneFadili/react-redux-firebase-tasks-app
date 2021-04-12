export const signIn = (email, passsword) => {};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signOut();
};

export const signUp = (email, password) => (
  dispatch,
  getState,
  { getFirebase },
) => {
  const firebase = getFirebase();
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
