import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TravelBlogSection.css";

const blogData = [
  {
    id: 1,
    title: "Where The Ocean Meets Infinity: Travel To Many Of The Best Beaches In The World",
    desc: "Think of a place where the ocean goes forever, the ground under your feet seems like silk...",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    date: "Jun 12, 2025",
  },
  {
    id: 2,
    title: "Wander Far, Spend Less In 2026: Best Places To Travel In Budget",
    desc: "Are you considering a longer vacation to the best places to travel in 2026...",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    date: "Oct 04, 2025",
  },
  {
    id: 3,
    title: "Singapore or Dubai – Which Is Better for Your Next Vacation?",
    desc: "Choosing between Singapore and Dubai can be one of the toughest travel decisions...",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    date: "Nov 22, 2025",
  },
];

const TravelBlogSection = () => {
  return (
    <section className="travel-blog-section">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="section-tag">- Travel Diaries -</span>
          <h2 className="section-title">
            Stories, Tips, and Inspiration from Fellow Travelers
          </h2>
          <p className="section-subtitle">
            Discover incredible journeys, expert advice, and travel inspiration
            shared by our community.
          </p>
        </div>

        {/* Cards */}
        <Row>
          {blogData.map((item) => (
            <Col key={item.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="blog-card h-100">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={item.img} />
                </div>

                <Card.Body>
                  <Card.Title className="blog-title">
                    {item.title}
                  </Card.Title>

                  <Card.Text className="blog-desc">
                    {item.desc}
                  </Card.Text>

                  <a href="#" className="read-more">
                    Read More →
                  </a>
                </Card.Body>

                <Card.Footer className="blog-footer">
                  <span>Post By : Eji Travel</span>
                  <span>{item.date}</span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TravelBlogSection;
