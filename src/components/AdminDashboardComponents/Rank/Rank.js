import React from "react";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Rank = () => {
  const handleAccept = () => {};
  const handleDecline = () => {};
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Promotion Request</h1>
        <div className="userUpdateItem">
          <input
            type="text"
            placeholder="Rank to e.g 1"
            className="userUpdateInput"
          />
        </div>
        <div className="buttonsContainer">
          <Link to="/newUser">
            <button className="userAddButton" onClick={handleAccept}>
              Accept
            </button>
          </Link>
          <Link to="/newUser">
            <button className="userDelButton" onClick={handleDecline}>
              Decline
            </button>
          </Link>
        </div>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Level 2 Seller</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Gig Title</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                I will create something for you
              </span>
            </div>

            <span className="userShowTitle">Ratings</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">4.5</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Curent Rank is 5</span>
            </div>
            <span className="userShowTitle">Revenue Generated</span>
            <div className="userShowInfo">
              <AttachMoneyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">26,000</span>
            </div>
            <span className="userShowTitle">Orders</span>
            <div className="userShowInfo">
              <AttachMoneyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Pending 13</span>
            </div>
            <div className="userShowInfo">
              <AttachMoneyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Closed 93</span>
            </div>
            <span className="userShowTitle">Orders till date</span>
            <div className="userShowInfo">
              <AttachMoneyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Completed 38</span>
            </div>
            <div className="userShowInfo">
              <AttachMoneyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Pending 4</span>
            </div>
            <div className="userShowInfo">
              <AttachMoneyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">In Queue 6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rank;
