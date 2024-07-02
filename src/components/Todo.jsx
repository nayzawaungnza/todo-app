import React, { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchQuery } from "../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

export default function Todo() {
  const dispatch = useDispatch();

  const handleaddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const [newTodoText, setNewTodoText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [require, setRequire] = useState(false);
  const addTodoHandlerClick = () => {
    if (newTodoText.trim() !== "") {
      handleaddTodo(newTodoText);
      console.log("add todo : ", newTodoText);
      setNewTodoText("");
      setRequire(false);
    } else {
      setRequire(true);
    }
  };

  const searchQueryHandler = (value) => {
    setSearchQuery(value);
    dispatch(updateSearchQuery(value));
  };
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-200 rounded">
      <h1 className="text-3xl mt-3 mb-6 font-bold text-center uppercase">
        Todo App
      </h1>
      {/* input text and button */}
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className={`flex-grow px-2 py-1 border-l border-t border-r border-b-2 focus:outline-none focus:border-fuchsia-500 ${
            require ? "border-red-500" : "border-gray-300"
          }`}
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          onClick={addTodoHandlerClick}
          className="ml-4 p-2 bg-fuchsia-500 text-white rounded hover:bg-fuchsia-600 focus:outline-none"
        >
          <BsPlus />
        </button>
      </div>
      {/* filter search query */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow px-2 py-1 border-b-2 border-gray-300 focus:outline-none focus:border-fuchsia-500"
            type="text"
            placeholder="Search Todos"
            value={searchQuery}
            onChange={(e) => searchQueryHandler(e.target.value)}
          />
          <button className="ml-4 p-2 hidden bg-fuchsia-500 text-white rounded hover:bg-fuchsia-600 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
}
