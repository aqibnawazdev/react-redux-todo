
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionsType";

let id = 0
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: { id: ++id, content }
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id }
})

export const updateTodo = (id, content) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    content
  }
})