import Button from "react-bootstrap/Button";
import React from "react";

import { useParams } from "react-router";
import MyTable from "../MyTable/MyTable";

import logo from "../../static/logo.png";

import "./Dashboard.css";

const Dashboard = () => {
  // fetch pincode from the url parameter (could've been fetched from LS too but initially implemented as url query)
  const { pincode } = useParams();

  // fetch name, email from localStorage
  const name =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
  const email = localStorage.getItem("email");

  return (
    <div className="custom-container">
      <div className="detail-row">
        <div className="user-detail-row">
          <div className="user-detail-row-1">
            <div className="detail-name">{name},</div>{" "}
            <div className="detail-pin">{pincode}</div>
          </div>
          <div className="detail-email">{email}</div>
        </div>

        <img src={logo} className="detail-logo"></img>
      </div>
      <MyTable />
    </div>
  );
};

export default Dashboard;
