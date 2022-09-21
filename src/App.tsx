import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./App.css";

const results = {
  results: [
    {
      country: "GB",
      city: "Aberdeen",
      count: 621734,
      locations: 3,
      firstUpdated: "2016-02-27T20:00:00+00:00",
      lastUpdated: "2022-09-21T05:00:00+00:00",
      parameters: ["no2", "o3", "pm10", "pm25"],
    },
    {
      country: "GB",
      city: "Adur",
      count: 29061,
      locations: 1,
      firstUpdated: "2021-04-29T00:00:00+00:00",
      lastUpdated: "2022-01-31T14:00:00+00:00",
      parameters: ["no2", "pm10", "pm25"],
    },
    {
      country: "GB",
      city: "Armagh",
      count: 234378,
      locations: 1,
      firstUpdated: "2016-02-27T21:00:00+00:00",
      lastUpdated: "2022-09-21T05:00:00+00:00",
      parameters: ["no2", "pm10"],
    },
    {
      country: "GB",
      city: "Aston Hill",
      count: 239035,
      locations: 1,
      firstUpdated: "2016-02-27T21:00:00+00:00",
      lastUpdated: "2022-09-21T05:00:00+00:00",
      parameters: ["no2", "o3"],
    },
    {
      country: "GB",
      city: "Auchencorth",
      count: 365517,
      locations: 1,
      firstUpdated: "2016-02-27T21:00:00+00:00",
      lastUpdated: "2022-09-21T05:00:00+00:00",
      parameters: ["o3", "pm10", "pm25"],
    },
    {
      country: "GB",
      city: "Ballymena",
      count: 193033,
      locations: 1,
      firstUpdated: "2016-02-27T21:00:00+00:00",
      lastUpdated: "2022-09-21T04:00:00+00:00",
      parameters: ["no2", "so2"],
    },
    {
      country: "GB",
      city: "Barking and Dagenham",
      count: 115662,
      locations: 2,
      firstUpdated: "2021-04-29T00:00:00+00:00",
      lastUpdated: "2022-09-21T04:00:00+00:00",
      parameters: ["no2", "pm10", "so2"],
    },
    {
      country: "GB",
      city: "Barnsley",
      count: 362444,
      locations: 1,
      firstUpdated: "2016-02-27T21:00:00+00:00",
      lastUpdated: "2022-09-21T05:00:00+00:00",
      parameters: ["no2", "o3", "so2"],
    },
  ],
};

function App() {
  const [currentCities, setCurrentCities] = useState([]);
  const [selectedCity, setSeletedCity] = useState("");

  return (
    <div className="App">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={results.results.map((option) => option.city)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </div>
  );
}

export default App;
