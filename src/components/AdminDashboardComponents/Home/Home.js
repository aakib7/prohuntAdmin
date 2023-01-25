import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../Chart";
import Deposits from "../Deposits";
import Orders from "../Orders";
import axios from "axios";
import { Typography } from "@mui/material";

const Home = () => {
  const [records, setRecords] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const fetchRecord = () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    setLoading(true);
    axios
      .get(
        `http://localhost:4000/admin`,

        config
      )
      .then((response) => {
        // console.log(response.data);
        setRecords(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    fetchRecord();
  }, []);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, pt: 5 }}>
      <Grid container spacing={3}>
        {/* Chart */}

        {/* Recent Deposits */}
        {!loading && records && (
          <>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 180,
                }}
              >
                <Deposits
                  title={"Total Freelancers"}
                  total={records?.freelancer}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 180,
                }}
              >
                <Deposits title={"Total Employer"} total={records?.employer} />
              </Paper>
            </Grid>{" "}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 180,
                }}
              >
                <Deposits title={"Total Jobs"} total={records?.jobs} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 180,
                }}
              >
                <Deposits title={"Total Gigs"} total={records?.gigs} />
              </Paper>
            </Grid>
          </>
        )}

        {!loading && (
          <Typography sx={{ marginLeft: 8, mt: 2 }} variant="h6">
            User Joining Graph
          </Typography>
        )}

        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 360,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
