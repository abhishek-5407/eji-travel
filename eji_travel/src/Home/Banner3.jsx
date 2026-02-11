import React from "react";
import { Container } from "react-bootstrap";
import "./Banner2.css";

const Banner3 = () => {
  return (
    <Container fluid className="banner-container p-0">
      <img
        src="/banner3.png"   // image public folder me ho
        alt="Cruise Banner"
        className="banner-image"
      />
    </Container>
  );
};

export default Banner3;
