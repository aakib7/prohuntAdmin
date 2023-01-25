import * as React from "react";
// import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import CountUp from "react-countup";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ title, total }) {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return (
    <>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        <CountUp end={total} duration={1} />
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1, marginTop: 5 }}>
        Till {date}
      </Typography>
    </>
  );
}
