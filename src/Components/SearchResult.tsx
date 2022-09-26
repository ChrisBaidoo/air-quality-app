import React from "react";
import { Grid } from "@mui/material";
import CityCard from "../Components/CityCard";
import { City } from "../Types/CityType";

interface Props {
  selectedCities: City[];
  handleClose: (location: string) => void;
}

const SearchResult = (props: Props) => {
  return (
    <Grid
      container
      columnSpacing={5}
      sx={{
        width: { xs: "80%", md: "60%" },
        margin: "auto",
      }}
    >
      {props.selectedCities?.map((item: City) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={item.location}
          sx={{
            paddingLeft: {
              xs: 0,
            },
          }}
        >
          <CityCard city={item} handleClose={props.handleClose} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResult;
