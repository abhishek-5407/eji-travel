import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "./TrendingDestinations.css";

const packages = [
  {
    id: 1,
    title: "Maldives Honeymoon Packages – Discover Romance Beyond Imagination",
    desc: "Discover dreamy Maldives honeymoon packages with luxury villas, private beaches & candlelight dinners.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    days: "5 days & 4 nights",
    price: "₹ 145,000",
    oldPrice: "₹ 150,000",
  },
  {
    id: 2,
    title: "Enchanting Singapore Malaysia Package: Adventure Across Two Vibrant Nations",
    desc: "Come along with us on an amazing trip that includes a 7-night Singapore Malaysia package.",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    days: "8 days & 7 nights",
    price: "₹ 85,000",
    oldPrice: "₹ 95,000",
  },
  {
    id: 3,
    title: "Bali Packages From India: Temples, Tropics & Tranquillity",
    desc: "Feel the soul of Bali with tropical scenes, beautiful temples, serene beaches and sunsets.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    days: "6 days & 5 nights",
    price: "₹ 34,999",
    oldPrice: "₹ 40,000",
  },
];

const TrendingDestinations = () => {
  return (
    <section className="trending-section">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="section-tag">- Explore the World -</span>
          <h2 className="section-title">
            Top Trending Destinations for Your Next Adventure
          </h2>
          <p className="section-subtitle">
            From exotic beaches to vibrant cities and serene retreats, discover
            destinations shaping the future of travel.
          </p>
        </div>

        {/* Cards */}
        <Row>
          {packages.map((item) => (
            <Col key={item.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="package-card h-100">
                <div className="img-box">
                  <Badge className="package-badge">
                    Package<br />{item.days}
                  </Badge>
                  <Card.Img src={item.img} />
                </div>

                <Card.Body>
                  <Card.Title className="package-title">
                    {item.title}
                  </Card.Title>

                  <Card.Text className="package-desc">
                    {item.desc}
                  </Card.Text>

                  <div className="price-box">
                    <span className="price">{item.price}</span>
                    <span className="old-price">{item.oldPrice}</span>
                  </div>
                </Card.Body>

                <Card.Footer className="package-footer">
                  <Button className="call-btn">
                    <i className="bi bi-telephone"></i>
                  </Button>
                  <Button className="book-btn">Book Now</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrendingDestinations;
