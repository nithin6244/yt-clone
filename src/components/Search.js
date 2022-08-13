import React from "react";
import { useState } from "react";

function Search({ searchInput, setSearchInput }) {
  const [inp, setInp] = useState("");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchInput(inp);
        }}>
        <h3>Video Search</h3>
        <input
          className="search-input"
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
