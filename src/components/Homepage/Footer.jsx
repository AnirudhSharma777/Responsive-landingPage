import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-light py-4 text-center" style={{backgroundColor:'#7e79e6'}}>
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                <strong> E-mail</strong>
                </a>
              </li>
              <li>contact@gmail.com</li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                <strong> Phone</strong>
                </a>
              </li>
              <li>tel:+123456789</li>
              <li className="text-light text-decoration-none">
              <strong> Address</strong>
              </li>
              <li className="text-light text-decoration-none">
                C-260, Sector-63, Noida, UP-201301
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Development Process
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Career
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-uppercase mb-3">Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Mobile App Development 
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  E-commerce Development
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Customer Software Development
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-uppercase mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Term & Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;