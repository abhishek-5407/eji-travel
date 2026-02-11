// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbaar.css";

function Navbaar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar py-2 shadow-sm" sticky="top">
      <Container fluid="xl">
        <Navbar.Brand href="#home">
          <img 
            src="/logo.svg" 
            alt="logo" 
            height="45" 
            width="200" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* mx-auto centers on desktop, but we override it to left-align on mobile in CSS */}
          <Nav className="mx-auto nav-links-wrapper">
            
            <NavDropdown title="Experiences" id="experiences-dropdown">
              <NavDropdown.Item href="#beaches">Beaches</NavDropdown.Item>
              <NavDropdown.Item href="#cruises">Cruises</NavDropdown.Item>
              <NavDropdown.Item href="#luxury">Luxury</NavDropdown.Item>
              <NavDropdown.Item href="#honeymoon">Honeymoon</NavDropdown.Item>
              <NavDropdown.Item href="#family">Family Friendly</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#solo">Solo Travel</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Destinations" id="destinations-dropdown">
              <NavDropdown.Item href="#india">India</NavDropdown.Item>
              <NavDropdown.Item href="#asia">Asia</NavDropdown.Item>
              <NavDropdown.Item href="#europe">Europe</NavDropdown.Item>
              <NavDropdown.Item href="#africa">Africa</NavDropdown.Item>
              <NavDropdown.Item href="#oceania">Oceania</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#antarctica">Antarctica</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#flights">Flights</Nav.Link>
            <Nav.Link href="#hotels">Hotels</Nav.Link>

            <NavDropdown title="More" id="more-dropdown">
              <NavDropdown.Item href="#sightseeing">Sightseeing</NavDropdown.Item>
              <NavDropdown.Item href="#visa">Visa</NavDropdown.Item>
              <NavDropdown.Item href="#transfers">Transfers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto">
            <div className="expert-box">
              <span className="expert-label">Talk to an Expert</span>
              <a href="tel:+919711555505" className="expert-number">
                +91-9711555505
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;