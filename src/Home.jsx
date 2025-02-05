import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
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

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>

      {/* Carousel Section */}
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      {/* Attractive Text Section */}
      <Container className="text-center my-4">
        <h2>Explore the Possibilities</h2>
        <p className="lead">
          Join us on a journey to discover innovative solutions tailored just for you. 
          Whether you're looking for efficiency, creativity, or simplicity, we have it all.
        </p>
        <Button color="primary" href="#features">Explore More</Button>
        
      </Container>

      {/* Features Section */}
      <Container id="features" className="my-4">
        <h2 className="text-center mb-4">Features</h2>
        <Row>
          <Col md="4">
            <Card className="mb-4 text-center">
              <CardBody>
                <FontAwesomeIcon icon={faRocket} size="3x" className="mb-3" />
                <CardTitle tag="h5">Feature One</CardTitle>
                <CardText>This feature allows you to do amazing things.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-4 text-center">
              <CardBody>
                <FontAwesomeIcon icon={faCheckCircle} size="3x" className="mb-3" />
                <CardTitle tag="h5">Feature Two</CardTitle>
                <CardText>This feature enhances your experience.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-4 text-center">
              <CardBody>
                <FontAwesomeIcon icon={faClock} size="3x" className="mb-3" />
                <CardTitle tag="h5">Feature Three</CardTitle>
                <CardText>This feature will save you time and effort.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-4 text-center">
              <CardBody>
                <FontAwesomeIcon icon={faTools} size="3x" className="mb-3" />
                <CardTitle tag="h5">Feature Four</CardTitle>
                <CardText>Customizable tools to fit your needs.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-4 text-center">
              <CardBody>
                <FontAwesomeIcon icon={faShieldAlt} size="3x" className="mb-3" />
                <CardTitle tag="h5">Feature Five</CardTitle>
                <CardText>Robust security features to protect your data.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-4 text-center">
              <CardBody>
                <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3" />
                <CardTitle tag="h5">Feature Six</CardTitle>
                <CardText>Collaborative tools for team efficiency.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-4">
        <h2 className="text-center mb-4">What Our Users Say</h2>
        <Row>
          <Col md="6">
            <Card className="mb-4">
              <CardBody className="text-center">
                <img src="https://picsum.photos/80?random=1" alt="User One" className="rounded-circle mb-3" />
                <CardTitle tag="h5">User One</CardTitle>
                <CardText>
                  <blockquote className="blockquote">
                    <p>"This service has changed my life!"</p>
                  </blockquote>
                </CardText>
                <div>
                  <Badge color="warning">Rating: 5/5</Badge>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="mb-4">
              <CardBody className="text-center">
                <img src="https://picsum.photos/80?random=2" alt="User Two" className="rounded-circle mb-3" />
                <CardTitle tag="h5">User Two</CardTitle>
                <CardText>
                  <blockquote className="blockquote">
                    <p>"I can't imagine going back to how things were before."</p>
                  </blockquote>
                </CardText>
                <div>
                  <Badge color="warning">Rating: 4.5/5</Badge>
                </div>
              </CardBody>
            </Card>
          </Col>
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