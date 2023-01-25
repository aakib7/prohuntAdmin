import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
} from "@mui/material";

const Categories = () => {
  return (
    <Box sx={{ mt: 5, p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        ADD CATEGORIES
      </Typography>
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Category description"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Category Type"
          variant="outlined"
        />
        <br />

        <br />
        <Button variant="contained" color="primary">
          save
        </Button>
      </form>
    </Box>
  );
};

export default Categories;
