import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
import PaidIcon from "@mui/icons-material/Paid";

export const mainListItems = (
  <React.Fragment>
    <Link to="">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/users">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
    </Link>
    <Link to="/reports">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItemButton>
    </Link>
    <Link to="/quries">
      <ListItemButton>
        <ListItemIcon>
          <ContactEmergencyIcon />
        </ListItemIcon>
        <ListItemText primary="Quries" />
      </ListItemButton>
    </Link>
    <Link to="/subscription">
      <ListItemButton>
        <ListItemIcon>
          <SubscriptionsIcon />
        </ListItemIcon>
        <ListItemText primary="Subscription" />
      </ListItemButton>
    </Link>{" "}
    <Link to="/reportuser">
      <ListItemButton>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
    </Link>
    <Link to="/payment">
      <ListItemButton>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
