import React, { useEffect, useState } from "react";
import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";
import { userRows } from "./userListDummyData";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import MessageIcon from "@mui/icons-material/Message";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleWarning = () => {};

  const handleMessageToUser = () => {};

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
        console.log(response.data);
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

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "userName",
      headerName: "User Name",
      width: 250,
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
    { field: "email", headerName: "Email", width: 350 },
    {
      field: "role",
      headerName: "Role",
      type: "text",
      width: 200,
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
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Block</button>
            </Link>
            {/* <HighlightOffIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            <WarningAmberIcon
              className="userListDelete"
              onClick={() => handleWarning(params.row.id)}
            />
            <MessageIcon
              className="userListDelete"
              onClick={() => handleMessageToUser(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {!loading && users && (
        <DataGrid
          rows={users?.users}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
        />
      )}
    </div>
  );
}
