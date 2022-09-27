import React, { useState, useEffect } from "react";

import "./App.css";
import Search from "./Components/Search";
import SearchResult from "./Components/SearchResult";
import Header from "./Components/Header";
import { City, CityName } from "./Types/CityType";
import { fetchAndUpdateState } from "./helpers/FetchData";
import config from "./helpers/config";
import { RequestState, Result } from "./helpers/RequestState";
import { Typography } from "@mui/material";

function App() {
  const [currentCities, setCurrentCities] = useState<string[]>([]);
  const [selectedCities, setSeletedCities] = useState<City[] | undefined>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () =>
    fetchAndUpdateState(config.CityApiUrl, handleCitiesUpdate);

  const handleCitiesUpdate = (result: Result) => {
    const response = result.response;
    setCurrentCities(response.map((x: CityName) => x.name));
    setIsError(result.state === RequestState.FAILED);
  };

  const getSelectedCity = async (
    event: React.SyntheticEvent<EventTarget>,
    value: string
  ) =>
    fetchAndUpdateState(`${config.AirQualityApiUrl}${value}`, compareResults);

  const compareResults = (result: Result): void => {
    const response = result.response;
    let cities = selectedCities ? selectedCities : ([] as City[]);

    response.forEach((item: City) => {
      const exist = cities?.some((obj) => obj.location === item.location);
      if (!exist) {
        cities?.unshift(item);
      }
    });
    setSeletedCities([...cities]);
    setIsError(result.state === RequestState.FAILED);
  };

  const removeCard = (location: string) => {
    const cities = selectedCities?.filter((item) => item.location !== location);
    setSeletedCities(cities);
  };

  const handleClose = (location: string) => removeCard(location);

  return (
    <div className="App">
      <Header />
      <Search currentCities={currentCities} getSelectedCity={getSelectedCity} />
      {isError && (
        <Typography>Ooops something went wrong, please try again</Typography>
      )}
      {selectedCities && (
        <SearchResult
          selectedCities={selectedCities}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

export default App;
