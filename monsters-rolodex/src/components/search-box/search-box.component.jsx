import { Component } from "react";

const SearchBox = ({ onSearchChangeHandler }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="Search Monsters"
      onChange={onSearchChangeHandler}
      autoFocus
    />
  );
};

export default SearchBox;
