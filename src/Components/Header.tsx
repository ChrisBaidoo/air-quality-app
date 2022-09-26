import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: 700,
          color: "#f3f3f3",
          textAlign: "center",
        }}
      >
        Compare your air
      </Typography>
      <Typography
        sx={{
          color: "#f3f3f3",
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: 500,
          margin: "0.5rem auto",
          width: "80%",
        }}
      >
        Compare the air quality between cities in the UK.
      </Typography>
      <Typography
        sx={{
          color: "#f3f3f3",
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: 500,
          margin: "0.5rem auto",
          width: "80%",
        }}
      >
        Select cities to compare using the search tool below.
      </Typography>
    </>
  );
};

export default Header;
