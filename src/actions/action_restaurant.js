import axios from "axios";

export const GET_RESTAURANTS = "GET_RESTAURANTS";
export const GET_RESTAURANT = "GET_RESTAURANT";
export const ADD_RESTAURANT = "ADD_RESTAURANT";

export function getRestaurants() {
  const url = "/api/restaurants";
  const request = axios.get(url);
  console.log("res", request)
  return {
    type: GET_RESTAURANTS,
    payload: request
  }
}

export function getRestaurant(id) {
  const url = "/api/restaurant";
  const request = axios.get(url);
  return {
    type: GET_RESTAURANT,
    payload: request
  }
}

export function addRestaurant(id) {
  const url = "/api/restaurant";
  const request = axios.post(url);
  return {
    type: ADD_RESTAURANT,
    payload: request
  }
}
