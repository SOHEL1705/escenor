import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Register = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, seterorr] = useState("");

  const HandleChane = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value });
    //change the data in input > name > value
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const HOST = "http://localhost:8000/api/users";
      const { data: res } = await axios.post(HOST, data);
      
      navigate("/");
      console.log(res.message);
    } catch (error) {
      console.log(error.response.data);
      if (error.response.status >= 400 && error.response.status <= 500) {
        seterorr(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Container>
        <div className="container">
          <Form className="container_Reg" onSubmit={HandleSubmit}>
          <h1>REGISTER</h1>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                onChange={HandleChane}
                name="firstName"
                value={data.firstName}
                type="text"
                required
                placeholder="Enter FirstName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                onChange={HandleChane}
                name="lastName"
                value={data.lastName}
                required
                placeholder="Enter LasttName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={HandleChane}
                name="email"
                value={data.email}
                required
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={HandleChane}
                name="password"
                value={data.password}
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="btn">
              <Button variant="primary" type="submit">
                REGISTER
              </Button>
            </div>
            {error && <div className="error_msg">{error}</div>}
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Register;
