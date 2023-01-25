import React from "react";
import { Grid } from "@mui/material";
import Teamwork_Illustration from "../assets/images/Teamwork_Illustration.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HeroSection1 = () => {
  return (
    <Grid container className="page_size" spacing={2}>
      <Grid item md={6} xs={12} sm={12}>
        <img className="section_1_img" src={Teamwork_Illustration} />
      </Grid>
      <Grid item md={6} xs={12} sm={12}>
        <div className="section_1_right">
          <div className="section_1_text">
            <h1>Find & Hire Expert Freelancers</h1>
            <h3>
              Work with the best freelance talent from around the world on our
              secure, flexible and cost-effective platform.
            </h3>
            <TextField
              className="searchbar"
              label="What skills are you looking for?"
              variant="outlined"
              color="secondary"
              focused
            />
            <h3>OR</h3>
            <Button
              className={"job_button"}
              variant="contained"
              color="secondary"
            >
              Post a job - It's free
            </Button>
            <div className={"category_button"}>
              <Button variant="contained" color="primary" size="small">
                Graphics Designing
              </Button>
              <Button variant="contained" color="primary" size="small">
                Web Development
              </Button>
              <Button variant="contained" color="primary" size="small">
                Digital Marketing
              </Button>
              <Button variant="contained" color="primary" size="small">
                SEO
              </Button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroSection1;
