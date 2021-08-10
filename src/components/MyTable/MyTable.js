import Table from "react-bootstrap/Table";
import axios from "axios";

import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

import "./MyTable.css";

const MyTable = () => {
  let [centers, setCenters] = useState([]);

  const { pincode } = useParams();
  const name =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");

  // Fetch data when page loads initially
  useEffect(async () => {
    handleUpdate();
  }, []);

  // Utility for date in DD-MM-YYYY format
  const getDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return day + "-" + month + "-" + year;
  };

  // Utility to make request
  const handleUpdate = () => {
    let date = getDate();
    const endPoint = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`;
    axios
      .get(endPoint)
      .then((res) => {
        setCenters(res.data.sessions);
        console.log("in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoBack = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th className="table-left">District</th>
            <th>Name</th>
            <th>Address</th>
            <th>Fee Type</th>
            <th>Vaccine</th>
            <th>Age Limit</th>
            <th>Dose 1</th>
            <th className="table-right">Dose 2</th>
          </tr>
        </thead>
        <tbody>
          {centers.map((el) => (
            <tr>
              <td className="table-left">{el.district_name}</td>
              <td>{el.name}</td>
              <td>{el.address}</td>
              <td>{el.fee_type}</td>
              <td>{el.vaccine}</td>
              <td>{el.min_age_limit === 18 ? "18-44" : "45"}</td>
              <td>{el.available_capacity_dose1}</td>
              <td className="table-right">{el.available_capacity_dose2}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="btn-row">
        <Button className="custom-btn-secondary" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button className="custom-btn-primary" onClick={handleUpdate}>
          Update Data
        </Button>
      </div>
    </div>
  );
};

export default MyTable;
