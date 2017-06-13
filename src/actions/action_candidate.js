import axios from "axios";

export const GET_CANDIDATE = "GET_CANDIDATE";
export const ADD_CANDIDATE = "ADD_CANDIDATE";

export function addCandidate(props) {
  console.log("candy", props);
  const date = new Date();
  props.register_date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
  const url = "/api/candidate";
  const request = axios.post(url, props);
  return {
    type: ADD_CANDIDATE,
    payload: request
  }
}
export function getCandidate(props) {
  const url = "/api/candidate";
  const request = axios.get(url);
  return {
    type: GET_CANDIDATE,
    payload: request
  }
}
