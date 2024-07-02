import { db } from "../firebase/firebase";
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_UNCOMPLETED,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_QUERY,
} from "./actionTypes";
import { collection } from "firebase/firestore";
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

// export const addTodo = (text) => sync() => {
//   const newTodo = {
//     text,
//     completed: false,
//     id: Math.floor(1000 * Math.random() + 1),
//   };
//   await db.collection("todosapp").add(newTodo);

//   return {
//     type: ADD_TODO,
//     payload: { text },
//   };
// };
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markUncompleted = (id) => ({
  type: MARK_UNCOMPLETED,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchQuery = (query) => ({
  type: UPDATE_SEARCH_QUERY,
  payload: { query },
});
