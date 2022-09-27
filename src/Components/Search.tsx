import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";

const autoComplete = {
  width: {
    xs: "80%",
    md: "25%",
  },
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "40px",
  backgroundColor: "#f3f3f3",
  borderRadius: "6px",
};

interface Props {
  currentCities: string[];
  getSelectedCity: (
    event: React.SyntheticEvent<EventTarget>,
    value: string
  ) => void;
}

const Search = (props: Props) => {
  return (
    <Autocomplete
      id="combo-box-demo"
      sx={autoComplete}
      disableClearable
      popupIcon={null}
      options={props.currentCities}
      onChange={async (e, v) => await props.getSelectedCity(e, v)}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        );
      }}
    />
  );
};

export default Search;
