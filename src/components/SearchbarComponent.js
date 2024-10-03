import React from "react";

function SearchbarComponent({
  searchValue,
  handleSearchChange,
  handleSearchSumbit,
}) {
  return (
    <div>
      <form onSubmit={handleSearchSumbit}>
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Enter a song name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchbarComponent;
