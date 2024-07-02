import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";

export default function FilterButton() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  const filterHandler = (filter) => {
    dispatch(filterTodos(filter));
  };
  return (
    <div className="flex space-x-4 items-center">
      <select
        value={currentFilter}
        onChange={(e) => filterHandler(e.target.value)}
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
      >
        <option value="All">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="UNCOMPLETE">Incomplete</option>
      </select>
      <button
        onClick={() => dispatch(markAllCompleted())}
        className="text-sm px-2 py-1 bg-green-500 text-white rounded ml-2"
      >
        Mark All Completed
      </button>
    </div>
  );
}
