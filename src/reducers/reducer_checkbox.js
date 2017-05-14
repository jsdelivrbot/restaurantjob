import { GET_STATES, GET_TITLES } from "../actions/action_checkbox";

export default function checkboxReducer(state={ titles: "", states: "" }, action) {
  switch(action.type) {
    case GET_TITLES:
      return { ...state, titles: action.payload }
      break;
    case GET_STATES:
      return { ...state, states: action.payload }
      break;
    default:
      return state;
      break;
  }
}
