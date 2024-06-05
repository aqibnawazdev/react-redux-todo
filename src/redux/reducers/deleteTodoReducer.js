import { DELETE_TODO } from "../actionsType"

export const deleteTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    default:
      return {
        ...state
      }
  }

} 