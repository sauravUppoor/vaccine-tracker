import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import logo from "../../static/logo.png";

import "./MyForm.css";

const MyForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");

  const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    return (
      firstName.length > 0 &&
      validateEmail(email) === true &&
      pincode.length === 6
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // store first and last name in local storage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("pincode", pincode);

    // pass pincode as url parameter
    window.location = `/dashboard/${pincode}`;
  };

  return (
    <Col md="5">
      <img src={logo} className="logo" />
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            placeholder="Pincode"
            onChange={(e) => {
              setPincode(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <div>
          <Button
            className="btn custom-btn-primary"
            onClick={handleSubmit}
            disabled={!validateForm()}
          >
            Show Slots
          </Button>
        </div>
        <div>
          <Button className="btn custom-btn-secondary" type="reset">
            Reset Form
          </Button>
        </div>
      </Form>
    </Col>
  );
};

export default MyForm;
