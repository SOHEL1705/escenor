import React from "react";
import './Todo.css'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Lending = () => {
  return (
    <>
      <div className="btn_bg">
        <div className="btns">
          <Link to="/">
            <Button className="landing_log">LOGIN</Button>
          </Link>
          <Link to="/Register">
            <Button  className="landing_reg" type="submit">
              REGISTER
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Lending;
