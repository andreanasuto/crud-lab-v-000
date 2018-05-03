import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [] }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant.text, { id: cuidFn() });
      return { restaurants: state.restaurants.concat(restaurant) }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(function(el){
        return el.id !== action.id
      })
      return {restaurants}
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, { id: cuidFn() })
      return Object.assign({}, state, {reviews: state.reviews.concat(review)})
    default:
      return state
  }

}
