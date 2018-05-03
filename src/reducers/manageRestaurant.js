
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurants = state.store.restaurants.concat(action.text)
      return {restaurants}
    case 'DELETE_RESTAURANT':
      return 'hello'
    default:
      return state
  }

}
