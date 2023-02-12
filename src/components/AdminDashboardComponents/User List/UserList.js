import React, { useEffect, useState } from "react";
import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

import axios from "axios";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
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

export default function UserList() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchUsers = () => {
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
        `http://localhost:4000/admin/users`,

        config
      )
      .then((response) => {
        // console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBlock = (id, block) => {
    var status = !block;
    axios
      .post(`http://localhost:4000/admin/block/user`, {
        id,
        block: status,
      })
      .then((response) => {
        // console.log(response.data);
        fetchUsers();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "userName",
      headerName: "User Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={"http://localhost:4000/" + params.row.avatar.url}
              alt="/"
            />
            <p style={{ marginLeft: 3 }}>{params.row.userName}</p>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "role",
      headerName: "Role",
      type: "text",
      width: 100,
    },
    {
      field: "onGoingProject",
      headerName: "Pending Orders",
      type: "text",
      width: 150,
    },
    {
      field: "reports",
      headerName: "Reports",
      type: "text",
      width: 100,
    },
    {
      field: "country",
      headerName: "Country",
      type: "text",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link>
              <button
                className="userListEdit"
                style={{
                  background: params.row.isBlocked ? "green" : "red",
                }}
                onClick={() => {
                  handleBlock(params.row._id, params.row.isBlocked);
                }}
              >
                {params.row.isBlocked ? "Unblock" : "Block"}
              </button>
            </Link>{" "}
            <Link>
              <button
                className="userListEdit"
                style={{
                  background: params.row.isBlocked ? "green" : "red",
                }}
                onClick={() => {
                  handleBlock(params.row._id, params.row.isBlocked);
                }}
              >
                {params.row.isBlocked ? "Warned" : "Warning"}
              </button>
            </Link>{" "}
            <Link>
              <button
                className="userListEdit"
                style={{
                  background: params.row.isBlocked ? "green" : "red",
                }}
                onClick={() => {
                  handleBlock(params.row._id, params.row.isBlocked);
                }}
              ></button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div class="container d-flex justify-content-center mt-4">
        <div className="">
          <Box>
            <Toolbar>
              <Search>
                <StyledInputBase
                  placeholder="Search By User Name"
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
      <div className="userList">
        {!loading && users && (
          <DataGrid
            rows={users?.users?.filter((person) => {
              if (search == "") {
                return person;
              } else if (
                person.userName.toLowerCase().includes(search.toLowerCase())
              ) {
                return person;
              }
            })}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
          />
        )}
      </div>
    </>
  );
}
