import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import GoogleIcon from "@mui/icons-material/Google";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Contact from "../assets/images/Contact.jpg";
import Grid from "@mui/material/Grid";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactForm = () => {
  return (
    <>
      <Grid container className="page_size" spacing={2}>
        <Grid item md={6} xs={12} sm={12}>
          <img className="side_image" src={Contact} />
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <div className="login_form">
            <div className="login-form-container">
              <RecentActorsIcon className="login_form_title_icon" />
              <h1 className="login_form_title">CONTACT US NOW</h1>
              <TextField
                className="text_field"
                id="name"
                label="Your Name"
                variant="standard"
              />
              <TextField
                className="text_field"
                id="email"
                label="Your Email"
                variant="standard"
              />
              <TextField
                className="text_field"
                id="message"
                label="Your Message"
                multiline
                maxRows={10}
                variant="standard"
              />
              <div className="submit_button">
                <Button variant="contained">Submit</Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
