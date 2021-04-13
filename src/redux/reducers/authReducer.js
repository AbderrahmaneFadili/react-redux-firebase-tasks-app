import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_ERR,
  SIGN_UP,
  SIGN_UP_ERR,
} from "../types/authTypes";
import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      toast("Welcome back..");
      return state;
    case SIGN_IN_ERR:
      toast.error(action.payload);
      return state;
    case SIGN_OUT:
      toast("You signed out..");
      return state;
    case SIGN_UP:
      toast("Welcome..");
      return state;
    case SIGN_UP_ERR:
      toast.error(action.payload);
      return state;
    default:
      return state;
  }
};

export default authReducer;
