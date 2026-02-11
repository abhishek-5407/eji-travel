import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <header className="top-header">
      {/* container-fluid for full width */}
      <Container fluid>
        <Row className="align-items-center gx-0">

          {/* LEFT – Email (Desktop only) */}
          <Col lg={4} className="d-none d-lg-flex align-items-center text-white ps-4">
            📧 info@ejj.travel
          </Col>

          {/* CENTER – Text (All views) */}
          <Col xs={12} lg={4} className="text-center text-white py-2">
            Your Perfect Trip is Just a Click Away{" "}
            <a href="#" className="quote-link">
              Get a Free Quote
            </a>
          </Col>

          {/* RIGHT – Icons (Desktop only) */}
          <Col lg={4} className="d-none d-lg-flex justify-content-end pe-4">
            <div className="social-icons">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </Col>

        </Row>
      </Container>
    </header>
  );
};

export default Header;
