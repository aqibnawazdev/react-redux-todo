import { combineReducers } from "redux";
import { addTodoReducer } from "./addTodoReducer";
import { deleteTodoReducer } from "./deleteTodoReducer";
import { updateTodoReducer } from "./updateTodoReducer";

// Helper function to combine todos reducers

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodoReducer(state, action);
    case "DELETE_TODO":
      return deleteTodoReducer(state, action);
    case "UPDATE_TODO":
      return updateTodoReducer(state, action);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
