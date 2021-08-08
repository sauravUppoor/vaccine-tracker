import React from 'react'

import MyForm from "../MyForm/MyForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import bg from "../../static/bg.png";

import "./Login.css";

const Login = () => {
    return (
        <Row className="w-100">
            <Col  md="7" className="rectangle-2">
                <img src={bg} className="rectangle-2"/>
            </Col>
            <MyForm />
        </Row>
    )
}

export default Login
