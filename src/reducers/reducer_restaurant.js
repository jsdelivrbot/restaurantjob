import { GET_RESTAURANTS, GET_RESTAURANT } from "../actions/action_restaurant";

const INITIAL_STATE = { all: [], current_restaurant: {} };

export default function restaurantReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return { ...state, all: action.payload.data }
      break;
    case GET_RESTAURANT:
      return { ...state, all: action.payload.data }
      break;
    default:
      return state;
      break;
  }
}
