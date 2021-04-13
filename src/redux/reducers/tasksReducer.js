import {
  ADD_TASK,
  ADD_TASK_ERR,
  REMOVE_TASK,
  REMOVE_TASK_ERR,
  TOGGLE_COMPLETED,
  TOGGLE_COMPLETED_ERR,
} from "../types/tasksTypes";
import { toast } from "react-toastify";

const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK:
      toast.success("Added a task");
      return state;
    case ADD_TASK_ERR:
      toast.error(action.payload);
      return state;
    case REMOVE_TASK:
      toast.warn("A task was removed...");
      return state;
    case REMOVE_TASK_ERR:
      toast.error(action.payload);
      return state;
    default:
      return state;
  }
};

export default tasksReducer;
