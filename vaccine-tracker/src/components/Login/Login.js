import { useEffect } from "react";

import MyForm from "../MyForm/MyForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import bg from "../../static/bg.png";

import "./Login.css";

const Login = () => {
  // check localStorage for data
  useEffect(() => {
    let firstName = localStorage.getItem("firstName");
    let lastName = localStorage.getItem("lastName");
    let email = localStorage.getItem("email");
    let pincode = localStorage.getItem("pincode");

    // if available then go to dashboard
    if (
      firstName !== null &&
      lastName !== null &&
      email !== null &&
      pincode !== null
    ) {
      window.location = `/dashboard/${pincode}`;
    }
  }, []);

  return (
    <Row className="w-100">
      <Col md="7" className="rectangle-2">
        <img src={bg} className="rectangle-2" />
        <div className="rectangle-text">
          <div className="title">Vaccine Tracker</div>
          <div className="subtitle">
            Find all important information and all things related to Covid-19
            and vaccine here
          </div>
        </div>
      </Col>
      <MyForm />
    </Row>
  );
};

export default Login;
