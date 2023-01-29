import React, { useState } from "react";
import axios from "axios";
import TablePagination from "@mui/material/TablePagination";
import moment from "moment";

function Payment() {
  const [payments, setPayments] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
      .get(`http://localhost:4000/order/payment/all`, config)
      .then((response) => {
        setPayments(response.data.payments);
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
      {!loading && payments && (
        <>
          <div className="text-center mt-4" style={{ width: "100%" }}>
            <h5 style={{ display: "inline-block" }}>Total Reports :</h5>
            <h5 style={{ display: "inline-block" }}>{payments.length}</h5>

            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Payment Date</th>
                  <th>Send By</th>
                  <th>Send To</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(payments)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
                    <tr key={index} style={{ cursor: "pointer" }}>
                      <td>{index + 1}</td>
                      <td>{moment(item.createdAt).format("MMM Do YY")}</td>
                      <td>{item.sendBy.email}</td>
                      <td>{item.sendTo.email}</td>
                      <td className="text-left">{item.amount}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={payments.length}
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

export default Payment;
