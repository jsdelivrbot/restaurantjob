import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import checkboxReducer from "./reducer_checkbox";
import restaurantReducer from "./reducer_restaurant";
import candidateReducer from "./reducer_candidate";
import filterReducer from "./reducer_filter";

const rootReducer = combineReducers({
  form: formReducer,
  checkbox: checkboxReducer,
  restaurant: restaurantReducer,
  candidate: candidateReducer,
  filter: filterReducer
});

export default rootReducer;
