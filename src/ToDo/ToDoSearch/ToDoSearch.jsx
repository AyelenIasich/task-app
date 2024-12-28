import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue, loading }) {

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className=" mb-3 search-wrapper mt-4">
      <input
        className="search-input"
        type="text"
        placeholder="Search a task"
        aria-label="Search a task"
        value={searchValue}
        onChange={handleSearch}
        disabled={loading}
      />
      <i className="fa-solid fa-magnifying-glass search-icon pe-3"></i>
    </div>
  );
}

export default ToDoSearch;
