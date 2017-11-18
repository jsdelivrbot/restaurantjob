import { SET_RESTAURANT_FILTER } from "../actions/action_filter";

const INITIAL_STATE = { restaurant_filter: {}, candidate_filter: {} };

export default function filterReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SET_RESTAURANT_FILTER:
      return { ...state, restaurant_filter: action.payload };
      break;
    // case GET_CANDIDATE_FILTER:
    //   return { ...state, candidate_filter: action.payload };
    //   break;
    default:
      return state;
      break;
  }
}
