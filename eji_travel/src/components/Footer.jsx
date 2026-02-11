import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Latest X icon
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="gy-4">
          {/* Column 1: Company Info */}
          <Col lg={4} md={12} className="footer-col">
            <div className="footer-logo">
              <img 
                src="/logo_white.svg" 
                alt="EJI Travel Solutions" 
                className="img-fluid" 
                style={{ maxHeight: '60px' }}
              />
            </div>
            <p className="footer-description">
              Explore the world with ease and confidence. We Offer curated travel 
              experiences that go beyond the ordinary. Let us handle the details, 
              so you can focus on creating memories.
            </p>
            <div className="social-links">
              <h6>Our Social Links:</h6>
              <div className="d-flex gap-2 mt-3">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaXTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaLinkedinIn /></a>
              </div>
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6} sm={6} className="footer-col">
            <h5 className="footer-heading">Quick Links</h5>
            <Nav className="flex-column footer-nav">
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#faq">FAQ's</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
              <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
              <Nav.Link href="#terms">Terms and Conditions</Nav.Link>
              <Nav.Link href="#refund">Refund Policy</Nav.Link>
            </Nav>
          </Col>

          {/* Column 3: Services */}
          <Col lg={2} md={6} sm={6} className="footer-col">
            <h5 className="footer-heading">Services</h5>
            <Nav className="flex-column footer-nav">
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#packages">Packages</Nav.Link>
              <Nav.Link href="#flights">Flights</Nav.Link>
              <Nav.Link href="#hotels">Hotels</Nav.Link>
              <Nav.Link href="#visa">Visa</Nav.Link>
            </Nav>
          </Col>

          {/* Column 4: Contact Us & Map */}
          <Col lg={4} md={12} className="footer-col">
            <h5 className="footer-heading">Contact Us</h5>
            <div className="contact-info">
              <p className="mb-1"><strong>EJI Travel Solutions</strong></p>
              <p className="address-text">
                First Floor, F-25, F Block, Pocket F, Sector 18, Noida, Uttar Pradesh 201301
              </p>
            </div>
            <div className="map-container mt-3">
              <iframe
                title="EJI Travel Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2238478148386!2d77.32360567630462!3d28.56229567570417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4499d91f111%3A0x6a05e5527f5a4a58!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-start pb-4">
            <p className="copyright-text">
              © 2026 EJI Travel Solution. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;