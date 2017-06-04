import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import checkboxReducer from "./reducer_checkbox";
import restaurantReducer from "./reducer_restaurant";

const rootReducer = combineReducers({
  form: formReducer,
  checkbox: checkboxReducer,
  restaurant: restaurantReducer
});

export default rootReducer;
