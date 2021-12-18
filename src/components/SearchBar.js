import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";

function SearchBar(props) {
  <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  ></Box>;
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
          id="outlined-size-small"
          // label="Search news"
          type="search"
          // defaultValue="Search news"
          type="search"
          size="small"
          onChange={handleChange}
        />
      </form>
    </div>
  );
} // EO Search bar

export default SearchBar;
