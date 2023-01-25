import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const Chart = () => {
  const [data, setData] = useState([
    {
      name: "Page A",
      uv: 10,
    },
    {
      name: "Page B",
      uv: 5,
    },
    {
      name: "Page C",
      uv: 4,
    },
    {
      name: "Page D",
      uv: 2,
    },
    {
      name: "Page E",
      uv: 3,
    },
    {
      name: "Page F",
      uv: 10,
    },
    {
      name: "Page G",
      uv: 0,
    },
  ]);
  const [loading, setLoading] = useState(false);
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
        `http://localhost:4000/admin/users/join`,

        config
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchRecord();
  }, []);

  return (
    <>
      {!loading && data && (
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
              dataKey="users"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default Chart;
