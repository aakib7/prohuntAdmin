// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
// import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: " rgba(218, 216, 216, 0.26)",
  "&:hover": {
    backgroundColor: "rgba(218, 216, 216, 0.26)",
    // width: "80%",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "70ch",
      },
    },
  },
}));

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function Quries() {
  const [quires, setQuries] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
      .get(`http://localhost:4000/admin/contact`, config)
      .then((response) => {
        console.log(response.data);
        setQuries(response.data.contact);
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
    <>
      {!loading && quires && (
        <>
          <div className="text-center mt-4" style={{ width: "100%" }}>
            <h5 style={{ display: "inline-block" }}>Total Quries :</h5>
            <h5 style={{ display: "inline-block" }}>{quires.length}</h5>
            <div class=" container d-flex justify-content-center">
              <div className="">
                <Box>
                  <Toolbar>
                    <Search>
                      <StyledInputBase
                        placeholder="Search By Name"
                        inputProps={{ "aria-label": "search" }}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                    </Search>
                  </Toolbar>
                </Box>
              </div>
            </div>
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(quires)
                  .filter((person) => {
                    if (search == "") {
                      return person;
                    } else if (
                      person.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return person;
                    }
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
                    <tr key={index} style={{ cursor: "pointer" }}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      {/* <td>{item.lastName}</td> */}

                      <td>{item.email}</td>
                      <td className="text-left">
                        <ReadMore>{item.message}</ReadMore>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={quires.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Quries;
