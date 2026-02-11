import React from "react";
import { Container } from "react-bootstrap";
import "./Banner1.css";

const Banner1 = () => {
  return (
    <Container fluid className="banner-container p-0">
      <img
        src="/banner1.png"   // image public folder me ho
        alt="Cruise Banner"
        className="banner-image"
      />
    </Container>
  );
};

export default Banner1;
