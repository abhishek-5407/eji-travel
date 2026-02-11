import { useLayoutEffect, useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Slider.css";

const sliderData = [
  { title: "Mountains", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { title: "Desert", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { title: "Wildlife", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { title: "Islands", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { title: "Cruises", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" },
  { title: "Desert", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { title: "Mountains", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { title: "Forest", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
];

const getItemsPerSlide = () => {
  const width = window.innerWidth;
  if (width < 576) return 1;       // mobile
  if (width < 992) return 2;       // tablet
  return 4;                        // laptop
};

const Slider = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);
  const [pause, setPause] = useState(false);

  // responsive logic
  const updateLayout = () => {
    setItemsPerSlide(getItemsPerSlide());
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // chunk data
  const slides = [];
  for (let i = 0; i < sliderData.length; i += itemsPerSlide) {
    slides.push(sliderData.slice(i, i + itemsPerSlide));
  }

  return (
    <Container fluid className="category-slider-wrapper">
      <Carousel
        indicators={false}
        controls={false}
        interval={3000}
        pause={pause ? "hover" : false}
        touch
      >
        {slides.map((group, index) => (
          <Carousel.Item key={index}>
            <Row
              className="g-4 justify-content-center"
              onMouseEnter={() => setPause(true)}
              onMouseLeave={() => setPause(false)}
            >
              {group.map((item, i) => (
                <Col
                  key={i}
                  xs={12}   // mobile
                  sm={6}    // tablet
                  lg={3}    // laptop (12 / 4 = 3)
                >
                  <div className="slider-card">
                    <img src={item.img} alt={item.title} />
                    <div className="slider-title">{item.title}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
