import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import checkboxReducer from "./reducer_checkbox";

const rootReducer = combineReducers({
  form: formReducer,
  checkbox: checkboxReducer
});

export default rootReducer;
