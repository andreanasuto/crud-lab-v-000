import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.text, { id: cuid });
      return { restaurants: state.restaurants.concat(restaurant) };
    case 'DELETE_RESTAURANT':
      return 'hello'
    default:
      return state
  }

}
