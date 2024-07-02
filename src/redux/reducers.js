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
const initialState = {
  todos: [],
  searchQuery: "",
  filter: "All",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            completed: false,
            id: Math.floor(1000 * Math.random() + 1),
          },
        ],
        filter: state.filter,
        searchQuery: state.searchQuery,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        filter: state.filter,
        searchQuery: state.searchQuery,
      };
    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchQuery: state.searchQuery,
      };
    case MARK_UNCOMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchQuery: state.searchQuery,
      };
    case FILTER_TODOS:
      return {
        ...state,
        todos: state.todos,
        filter: action.payload.filter,
        searchQuery: state.searchQuery,
      };
    case MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchQuery: state.searchQuery,
      };
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        todos: state.todos,
        searchQuery: action.payload.query,
        filter: state.filter,
      };
    default:
      return state;
  }
};
