import {
  ADD_TASK,
  ADD_TASK_ERR,
  REMOVE_TASK,
  REMOVE_TASK_ERR,
  TOGGLE_COMPLETED,
  TOGGLE_COMPLETED_ERR,
} from "../types/tasksTypes";

//Add task
export const addTask = (task) => (dispatch, getState, { getFirebase }) => {
  const firestore = getFirebase().firestore();
  firestore
    .collection("tasks")
    .add({ ...task })
    .then(() => dispatch({ type: ADD_TASK }))
    .catch((err) => dispatch({ type: ADD_TASK_ERR, payload: err.message }));
};

//remove Task
export const removeTask = (taskId) => (dispatch, getState, { getFirebase }) => {
  const firestore = getFirebase().firestore();
  firestore
    .collection("tasks")
    .doc(taskId)
    .delete()
    .then(() => dispatch({ type: REMOVE_TASK }))
    .catch((err) => dispatch({ type: REMOVE_TASK_ERR, payload: err.message }));
};
