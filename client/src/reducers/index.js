// combines all reducers
// reducers handle state (state, action)

import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import SurveysReducer from "./SurveysReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm, //special key (form)
  surveys: SurveysReducer,
});
