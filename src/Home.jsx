import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
  Badge,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCheckCircle, faClock, faTools, faShieldAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

// Carousel Items
const carouselItems = [
  { src: '/assets/slide1.jpg', altText: 'slide 1' },
  { src: '/assets/slide2.jpg', altText: 'slide 2' },
  { src: '/assets/slide3.jpg', altText: 'slide 3' },
];

// Features Data
const features = [
  { icon: faRocket, title: 'Fast Performance', text: 'Experience lightning-fast loading times.' },
  { icon: faCheckCircle, title: 'User Friendly', text: 'An intuitive interface for all users.' },
  { icon: faClock, title: 'Time Saving', text: 'Automated tasks to save you time.' },
  { icon: faTools, title: 'Custom Tools', text: 'Configure tools to fit your workflow.' },
  { icon: faShieldAlt, title: 'Security', text: 'Top-notch security for your data.' },
  { icon: faUsers, title: 'Collaborative', text: 'Easily work with your team.' },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((activeIndex + 1) % carouselItems.length);
  const previous = () => setActiveIndex((activeIndex - 1 + carouselItems.length) % carouselItems.length);

  return (
    <div>
      {/* Carousel Section */}
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <img src={item.src} alt={item.altText} />
          </CarouselItem>
        ))}
        <CarouselControl direction="prev" onClickHandler={previous} />
        <CarouselControl direction="next" onClickHandler={next} />
      </Carousel>

      {/* Introduction Section */}
      <Container className="text-center my-4">
        <h2>Explore the Possibilities</h2>
        <p className="lead">Join us on a journey to discover innovative solutions tailored just for you.</p>
        <Button color="primary" href="#features">Explore More</Button>
      </Container>

      {/* Features Section */}
      <Container id="features" className="my-4">
        <h2 className="text-center mb-4">Why us ?</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md="4" key={index}>
              <Card className="mb-4 text-center">
                <CardBody>
                  <FontAwesomeIcon icon={feature.icon} size="3x" className="mb-3" />
                  <CardTitle tag="h5">{feature.title}</CardTitle>
                  <CardText>{feature.text}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-4">
        <h2 className="text-center mb-4">What Our Users Say</h2>
        <Row>
          {[
            { name: 'User One', comment: 'This service has changed my life!', rating: '5/5', img: '/assets/user1.jpg' },
            { name: 'User Two', comment: 'I can’t imagine going back to how things were before.', rating: '4.5/5', img: '/assets/user2.jpg' },
          ].map((user, index) => (
            <Col md="6" key={index}>
              <Card className="mb-4 text-center">
                <CardBody>
                  <img src={user.img} alt={user.name} className="rounded-circle mb-3" />
                  <CardTitle tag="h5">{user.name}</CardTitle>
                  <blockquote className="blockquote">
                    <p>{user.comment}</p>
                  </blockquote>
                  <Badge color="warning">Rating: {user.rating}</Badge>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} My Brand. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;