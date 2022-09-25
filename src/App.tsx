import React, { useState, useEffect } from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

function App() {
  const [currentCities, setCurrentCities] = useState<string[]>([]);
  const [selectedCity, setSeletedCity] = useState<string>("");

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    try {
      const response = await fetch(
        "https://api.openaq.org/v1/cities?country=GB&limit=157"
      );
      const data = await response.json();
      console.log(data.results);
      setCurrentCities(data.results.map((x: any) => x.name));
    } catch (error) {
      console.log(error);
      //TODO handle error gracefully
    }
  };

  return (
    <div className="App">
      <h1>Compare your air</h1>
      <h2>Compare the air quality between cities in the UK.</h2>
      <h2>Select cities to compare using the search tool below.</h2>
      <Autocomplete
        className="searchBox"
        freeSolo
        disableClearable
        options={currentCities.map((option) => option)}
        onChange={(event: any, newValue: string) => {
          setSeletedCity(newValue);
        }}
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
      {selectedCity}
    </div>
  );
}

export default App;
