import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContinentsSection.css";

const cardsTop = [
  {
    id: 1,
    title: "Asia",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada",
  },
  {
    id: 2,
    title: "Europe",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
  },
];

const cardsBottom = [
  {
    id: 3,
    title: "Africa",
    img: "https://images.unsplash.com/photo-1547970810-dc1eac37d174",
  },
  {
    id: 4,
    title: "Oceania",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 5,
    title: "South America",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 6,
    title: "Antarctica",
    img: "https://images.unsplash.com/photo-1547970810-dc1eac37d174",
  },
];

const ContinentsSection = () => {
  return (
    <section className="global-section py-5">
      <Container>
        {/* Top Row */}
        <Row className="align-items-center mb-4">
          {/* Text */}
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <span className="section-tag">
              - Embark on a Global Journey -
            </span>
            <h2 className="section-title">
              Uncover the <span>Wonders</span> of Every Continent
            </h2>
            <p className="section-desc">
              Explore the world’s iconic and hidden gems, from South America’s
              rainforests to Africa’s savannas, Europe’s history, and Asia’s
              vibrant cultures. Discover adventure, culture, and natural beauty
              — one unforgettable journey at a time.
            </p>
          </Col>

          {/* Top 2 Cards */}
          <Col lg={6} md={12}>
            <Row className="g-3">
              {cardsTop.map((item) => (
                <Col key={item.id} md={6} sm={12}>
                  <div className="continent-card large">
                    <img src={item.img} alt={item.title} />
                    <div className="overlay">
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Bottom 4 Cards */}
        <Row className="g-3">
          {cardsBottom.map((item) => (
            <Col key={item.id} lg={3} md={6} sm={12}>
              <div className="continent-card">
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ContinentsSection;
