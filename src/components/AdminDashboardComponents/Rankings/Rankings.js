import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";
import { useState } from "react";
import { rankRows } from "./RankingsDummyData";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import MessageIcon from "@mui/icons-material/Message";

export default function Rankings() {
  const [data, setData] = useState(rankRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handlePromotion = () => {};

  const handleMessageToUser = () => {};

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "User Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="/" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "gigid", headerName: "Gig ID", width: 250 },
    {
      field: "status",
      headerName: "Status",
      type: "text",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/rank/" + params.row.id}>
              <button className="userListEdit">View Details</button>;
            </Link>
            <HighlightOffIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            <WarningAmberIcon
              className="userListDelete"
              onClick={() => handlePromotion(params.row.id)}
            />
            <MessageIcon
              className="userListDelete"
              onClick={() => handleMessageToUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
