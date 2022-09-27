import React from "react";
import { Grid } from "@mui/material";
import CityCard from "../Components/CityCard";
import { City } from "../Types/CityType";

const grid = {
  width: { xs: "80%", md: "60%" },
  margin: "auto",
};

interface Props {
  selectedCities: City[];
  handleClose: (location: string) => void;
}

const SearchResult = (props: Props) => {
  return (
    <Grid container sx={grid}>
      {props.selectedCities?.map((item: City) => (
        <Grid item xs={12} sm={6} md={6} key={item.location}>
          <CityCard city={item} handleClose={props.handleClose} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResult;
