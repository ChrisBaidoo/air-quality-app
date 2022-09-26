import React, { useState, useEffect } from "react";

import "./App.css";
import Search from "./Components/Search";
import SearchResult from "./Components/SearchResult";
import Header from "./Components/Header";
import { City } from "./Types/CityType";
import { fetchAndUpdateState } from "./helpers/FetchData";

function App() {
  const [currentCities, setCurrentCities] = useState<string[]>([]);
  const [selectedCities, setSeletedCities] = useState<City[] | undefined>([]);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () =>
    fetchAndUpdateState(
      "https://api.openaq.org/v1/cities?country=GB&limit=157",
      handleCitiesUpdate
    );

  const handleCitiesUpdate = (response: any) => {
    setCurrentCities(response.map((x: any) => x.name));
  };

  const getSelectedCity = async (event: any, value: string) =>
    fetchAndUpdateState(
      `https://api.openaq.org/v1/latest?country=GB&city=${value}`,
      compareResults
    );

  const compareResults = (results: City[]): void => {
    let cities = selectedCities ? selectedCities : ([] as City[]);

    results.forEach((item: City) => {
      const found = cities?.some((obj) => obj.location === item.location);
      if (!found) {
        cities?.unshift(item);
      }
    });
    setSeletedCities([...cities]);
  };

  const removeCard = (location: string) => {
    const cities = selectedCities?.filter((item) => item.location !== location);
    setSeletedCities(cities);
  };

  const handleClose = (location: any) => removeCard(location);

  return (
    <div className="App">
      <Header />
      <Search currentCities={currentCities} getSelectedCity={getSelectedCity} />
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
