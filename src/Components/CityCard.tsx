import React from "react";
import { Card, CardHeader, IconButton } from "@mui/material";
import { CardContent, Typography } from "@mui/material";

import { Close as CloseIcon } from "@mui/icons-material";
import { readableDateTime } from "../helpers/DateTime";
import { City } from "../Types/CityType";

const card = {
  borderRadius: "9px",
  margin: "20px 0 20px 0",
  padding: "10px",
  marginLeft: { xs: "0", md: "30px" },
};

const locationText = {
  color: "#7637b2",
  fontWeight: 700,
  fontSize: "1.5rem",
};

interface Props {
  city: City;
  handleClose: (location: string) => void;
}

const CityCard = (props: Props) => {
  const { city, handleClose } = props;

  return (
    <Card sx={card}>
      <CardHeader
        sx={{ padding: 0 }}
        action={
          <IconButton
            aria-label="close card"
            onClick={() => handleClose(city.location)}
          >
            <CloseIcon />
          </IconButton>
        }
      />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography sx={{ textTransform: "uppercase" }}>
          {readableDateTime(city.measurements[0].lastUpdated)}
        </Typography>
        <Typography sx={locationText}>{city.location}</Typography>
        <Typography>{`in ${city.city}, United Kingdom`}</Typography>
        <Typography sx={{ fontWeight: 600 }}>
          Values:
          {city.measurements.map((measureItem: any) => {
            return ` ${measureItem.parameter.toUpperCase()}: ${
              measureItem.value
            }, `;
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CityCard;