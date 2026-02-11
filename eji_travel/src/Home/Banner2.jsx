import React from "react";
import { Container } from "react-bootstrap";
import "./Banner2.css";

const Banner2 = () => {
  return (
    <Container fluid className="banner-container p-0">
      <img
        src="/banner2.png"   // image public folder me ho
        alt="Cruise Banner"
        className="banner-image"
      />
    </Container>
  );
};

export default Banner2;
