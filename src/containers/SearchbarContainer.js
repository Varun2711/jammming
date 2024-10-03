import React, { useState } from "react";
import SearchbarComponent from "../components/SearchbarComponent";

// The container for Searchbar
// handles all searchbar logic
function SearchbarContainer() {
  const [searchValue, setSearchValue] = useState("");
  const [searched, setSearched] = useState(false);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    setSearched(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
    console.log("a search was made");
  };

  return (
    <div>
      <SearchbarComponent
        searchValue={searchValue}
        handleSearchChange={handleChange}
        handleSearchSumbit={handleSubmit}
      />
      {/*This is dummy code to test the seach functionality*/}
      {searched ? (
        <p>{`You made a search request for ${searchValue}`}</p>
      ) : (
        <p>Nothing was searched</p>
      )}
    </div>
  );
}

export default SearchbarContainer;
