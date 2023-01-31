import React from "react";
import Header from "./Header";
import Todos from "./Todos";
import Container from "react-bootstrap/Container";
const Home = () => {
  return (
    <>
      <Container>
        <div className="TodoCon">
          <h1>WELLCOME...! </h1>
          <Header />
        </div>
          <Todos />
      </Container>
    </>
  );
};

export default Home;
