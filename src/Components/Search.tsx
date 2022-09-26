import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";

interface Props {
  currentCities: string[];
  getSelectedCity: (event: any, value: any) => void;
}

const Search = (props: Props) => {
  return (
    <Autocomplete
      className="searchBox"
      sx={{
        width: {
          xs: "80%",
          md: "25%",
        },
      }}
      freeSolo
      disableClearable // Remove close button and add default message when no search result found
      noOptionsText={"No option found"}
      options={props.currentCities} //Populate the drop down option
      onChange={async (e, v) => await props.getSelectedCity(e, v)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Enter city name..."
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
