import { GET_CANDIDATE, ADD_CANDIDATE } from "../actions/action_candidate";

const INITIAL_STATE = {};

export default function candidateReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GET_CANDIDATE:
      return action.payload.data;
      break;
    case ADD_CANDIDATE:
      return action.payload.data;
      break;
    default:
      return state;
      break;
  }
}
