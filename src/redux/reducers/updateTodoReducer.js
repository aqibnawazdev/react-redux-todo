import { UPDATE_TODO } from "../actionsType"
const initialState = {
  todos: []
}

export const updateTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo)
      }
    default:
      return {
        ...state
      }
  }

} 