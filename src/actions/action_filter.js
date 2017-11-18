export const SET_RESTAURANT_FILTER = "SET_RESTAURANT_FILTER";

export function setRestaurantFilter(obj) {
  return {
    type: SET_RESTAURANT_FILTER,
    payload: obj
  }
}
