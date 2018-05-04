import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []},
                                          action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { text: action.restaurant.text, id: cuidFn() };
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(function(el){
        return el.id !== action.id })
      return Object.assign({}, state, {restaurants})

    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, { id: cuidFn() })
      return Object.assign({}, state, {reviews: state.reviews.concat(review)})

    case 'DELETE_REVIEW':
      const restaurants = state.restaurants.filter(function(el){
      return el.id !== action.id })
      return Object.assign({}, state, {restaurants})

    default:
      return state
  }

}
