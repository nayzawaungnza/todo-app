import { ADD_TODO } from "./actionTypes";
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: { id },
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: { id },
});

export const markCompleted = (id) => ({
  type: "MARK_COMPLETED",
  payload: { id },
});

export const markUncompleted = (id) => ({
  type: "MARK_UNCOMPLETED",
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: "FILTER_TODOS",
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: "MARK_ALL_COMPLETED",
});

export const updateSearchQuery = (query) => ({
  type: "UPDATE_SEARCH_QUERY",
  payload: { query },
});
