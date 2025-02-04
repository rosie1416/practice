import React from 'react';
import './index.css';


import { 
  Container, 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  CardText, 
  Button 
} from 'reactstrap';

// Import images from the assets folder
import asset1 from './assets/asset1.jpg';
import asset2 from './assets/asset2.jpg';
import asset3 from './assets/asset3.jpg';
import asset4 from './assets/asset4.jpg';
import asset5 from './assets/asset5.jpg';
import asset6 from './assets/asset6.jpg';
import asset7 from './assets/asset7.jpg';
import asset8 from './assets/asset8.jpg';

const Services = () => {
  // Array of service data with detailed content
  const services = [
    {
      title: "Web Development",
      subtitle: "Building Responsive Websites",
      image: asset1,
      description: "We create stunning and responsive websites that provide an excellent user experience across all devices."
    },
    {
      title: "Mobile App Development",
      subtitle: "Apps for All Platforms",
      image: asset2,
      description: "Our team specializes in developing mobile applications for both iOS and Android platforms tailored to your needs."
    },
    {
      title: "Digital Marketing",
      subtitle: "Grow Your Online Presence",
      image: asset3,
      description: "We provide comprehensive digital marketing strategies to enhance your brand's visibility and engagement online."
    },
    {
      title: "E-commerce Solutions",
      subtitle: "Sell Online Effectively",
      image: asset4,
      description: "Our e-commerce solutions help you set up and manage your online store with ease and efficiency."
    },
    {
      title: "SEO Services",
      subtitle: "Optimize Your Website",
      image: asset5,
      description: "We offer SEO services that will boost your website's visibility on search engines and attract more organic traffic."
    },
    {
      title: "Content Creation",
      subtitle: "Engaging and Relevant Content",
      image: asset6,
      description: "Our content creation services ensure that your brand message is conveyed clearly and effectively through various formats."
    },
    {
      title: "Graphic Design",
      subtitle: "Visual Identity and Branding",
      image: asset7,
      description: "We provide graphic design services that help establish your brand's visual identity and make it stand out."
    },
    {
      title: "Cloud Solutions",
      subtitle: "Scalable and Secure Infrastructure",
      image: asset8,
      description: "Our cloud solutions offer scalable and secure infrastructure to meet your business needs effectively."
    }
  ];

  return (
    <Container>
<h1 className="services-title text-center">Our Services</h1>{/* Adjusted margins */}
      <Row>
        {services.map((service, index) => (
          <Col xs="12" sm="6" md="4" key={index} className="mb-4">
            <Card style={{ width: '100%' }} className="border-0"> {/* Full width on mobile */}
              <img
                alt={service.title}
                src={service.image}
                className="card-img-top" // Bootstrap class for proper img styling
              />
              <CardBody>
                <CardTitle tag="h5">{service.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">{service.subtitle}</CardSubtitle>
                <CardText>{service.description}</CardText>
                <Button>Learn More</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;