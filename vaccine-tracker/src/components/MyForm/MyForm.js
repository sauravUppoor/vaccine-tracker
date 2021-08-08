import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import logo from "../../static/logo.png";

import "./MyForm.css";

const MyForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [pincode, setPincode] = useState("");

    // TODO: Add validation

    const handleSubmit = (event) => {
        event.preventDefault();

        
    }
    return (
        <Col md="5">
            <img src={logo} className="logo" />
            <Form>
                <Form.Group>
                    <Form.Label>
                        First Name
                    </Form.Label>
                    <Form.Control placeholder="First Name">
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Last Name
                    </Form.Label>
                    <Form.Control placeholder="Last Name">
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Pincode
                    </Form.Label>
                    <Form.Control placeholder="Pincode">
                    </Form.Control>
                </Form.Group>
                <div>
                    <Button className="btn-primary">Show Statistics</Button>
                </div>
                {/* <br /> */}
                <div>
                    <Button className="btn-secondary">Reset Form</Button>
                </div>
            </Form>
        </Col>
    )
}

export default MyForm
