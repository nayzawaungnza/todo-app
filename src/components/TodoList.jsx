import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const filteredTodo = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchQuery = state.searchQuery;
    return todos.filter((todo) => {
      const matchesFilter =
        filter === "All" ||
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "UNCOMPLETE" && !todo.completed);
      const matchesSearch = todo.text
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  });
  console.log("filter todo : ", filteredTodo);
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodo.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </ul>
  );
}
