import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id++;
      const restaurant = Object.assign({}, action.todo, { id: id });
      return { todos: state.todos.concat(todo) };
    case 'DELETE_RESTAURANT':
      return 'hello'
    default:
      return state
  }

}
