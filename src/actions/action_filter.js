export const GET_RESTAURANT_FILTER = "GET_RESTAURANT_FILTER";

export function getRestaurantFilter(obj) {
  return {
    type: GET_RESTAURANT_FILTER,
    payload: obj
  }
}
