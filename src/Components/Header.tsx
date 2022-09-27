import React from "react";
import { Typography } from "@mui/material";

const title = {
  color: "#f3f3f3",
  textAlign: "center",
};

const subTitile = {
  ...title,
  fontSize: "1.2rem",
  fontWeight: 500,
  margin: "0.5rem auto",
  width: "80%",
};

const Header = () => {
  return (
    <>
      <Typography sx={{ ...title, fontSize: "3rem", fontWeight: 700 }}>
        Compare your air
      </Typography>
      <Typography sx={subTitile}>
        Compare the air quality between cities in the UK.
      </Typography>
      <Typography sx={subTitile}>
        Select cities to compare using the search tool below.
      </Typography>
    </>
  );
};

export default Header;
