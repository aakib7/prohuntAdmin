import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Box style={{ display: "flex", width: "100%" }}>
        <Box>
          <Dashboard />
        </Box>
        <Box style={{ width: "100%" }}>
          <Box sx={{ paddingX: 0, paddingY: { xs: 5, md: 5 }, mt: 0 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
