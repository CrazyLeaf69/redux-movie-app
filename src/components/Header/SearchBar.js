import React from "react";

const SearchBar = ({ handleSubmit }) => {
  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
      <input type="text" name="input" placeholder="Search Movie Or Series" />
    </form>
  );
};

export default SearchBar;
