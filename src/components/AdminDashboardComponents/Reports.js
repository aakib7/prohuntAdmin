import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import Deposits from "./Deposits";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Reports = () => {
  const [records, setRecords] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
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
      .get(`http://localhost:4000/admin/orders`, config)
      .then((response) => {
        setRecords(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const fetchRecordOrderDetails = () => {
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
        `http://localhost:4000/admin/orders/details`,

        config
      )
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    fetchRecord();
    fetchRecordOrderDetails();
  }, []);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, pt: 5 }}>
      <Grid container spacing={3}>
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
                <Deposits title={"Total Orders"} total={records?.orders} />
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
                <Deposits
                  title={"Order Completed"}
                  total={records?.ordersCompleted}
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
                <Deposits
                  title={"Order in Progress"}
                  total={records?.orderInProgress}
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
                <Deposits title={"Total Blogs"} total={records?.blogs} />
              </Paper>
            </Grid>
          </>
        )}

        {!loading && records && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 360,
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="orders"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Reports;
