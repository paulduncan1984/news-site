import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  function handleChange(ev) {
    setSearchText(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    history.push(`/search/${searchText}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-search"
          label="Search news"
          type="search"
          onChange={handleChange}
        />
      </form>
    </div>
  );
} // EO Search bar

export default SearchBar;
