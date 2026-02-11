import React from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";
// import { Carousel, Container } from "react-bootstrap";

// import Slider from "./Slider.jsx";

import './Home.css';


const Home = () => {
  return (
    <>
    <section className="hero-bg hero-wrapper">
      <div className="hero-overlay"></div>

      <Container className="content-area">
        <Row className="align-items-center">
          
          {/* Left Content (Hidden on Mobile) */}
          <Col lg={7} md={6} className="hide-mobile mb-5 mb-md-0">
            <h1 className="hero-title">
              Your Journey <br /> Begins Here
            </h1>

            <p className="hero-text">
              Embark on a journey of a lifetime. From uncovering hidden treasures to exploring 
              iconic destinations, every moment is crafted to inspire.
            </p>

            <Button className="btn-primary-custom d-flex align-items-center">
              Explore Package <span className="ms-2">→</span>
            </Button>
          </Col>

          {/* Right Form Card */}
          <Col lg={5} md={6} className="mobile-full-width">
            <Card className="search-card">
              <Card.Body>
                <h4 className="mb-4 fw-bold text-dark">
                  Search Your Destinations
                </h4>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="form-label-custom">From :</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>📍</InputGroup.Text>
                      <Form.Control placeholder="Enter departure place" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="form-label-custom">To :</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>📍</InputGroup.Text>
                      <Form.Control placeholder="Enter destination place" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="form-label-custom">
                      Departure Month and Year :
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>📅</InputGroup.Text>
                      <Form.Control type="date" defaultValue="2026-01-26" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-custom">
                      No Of Persons :
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>👥</InputGroup.Text>
                      <Form.Control type="number" placeholder="No Of Persons" />
                    </InputGroup>
                  </Form.Group>

                  <Button className="btn-primary-custom w-100">
                    Search 🔍
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>

     {/* <Slider /> */}

    </>
  );
};

export default Home;
