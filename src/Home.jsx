import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Navbar,
  Nav,
  NavItem,
  NavLink,
 
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">My Brand</Link>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup">Sign Up</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      {/* Hero Section */}
 
        <Container>
          <h1 className="display-3">Welcome to the Home Page</h1>
          <p className="lead">This is the home page of your app.</p>
          <Button color="primary" tag={Link} to="/about">Learn More</Button>
        </Container>
      

      {/* Features Section */}
      <Container>
        <h2 className="text-center mb-4">Features</h2>
        <Row>
          <Col md="4">
            <Card className="mb-4">
              <CardBody>
                <CardTitle tag="h5">Feature One</CardTitle>
                <CardText>This feature allows you to do amazing things.</CardText>
                <Button color="link">Learn More</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-4">
              <CardBody>
                <CardTitle tag="h5">Feature Two</CardTitle>
                <CardText>This feature enhances your experience.</CardText>
                <Button color="link">Learn More</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-4">
              <CardBody>
                <CardTitle tag="h5">Feature Three</CardTitle>
                <CardText>This feature will save you time and effort.</CardText>
                <Button color="link">Learn More</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;