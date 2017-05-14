export const GET_TITLES = "GET_TITLES";
export const GET_STATES = "GET_STATES";

export function getTitles(titles) {
  console.log(titles)
  return {
    type: GET_TITLES,
    payload: titles
  }
}

export function getStates(states) {
  return {
    type: GET_STATES,
    payload: states
  }
}
