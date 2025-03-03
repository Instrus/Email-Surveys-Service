// axios to make ajax requests (for communication with backend)
import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

// action creator: fetch current authenticated user - communicates with authReducer
// uses redux-thunk to return a function, rather than an action
export const fetchUser = () => {
  return async function (dispatch) {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

// handles stripe payments
export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token); // post request to backend server passing token
  // what type of action (update user model - credits)
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
