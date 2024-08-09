import './App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Footer from './components/Homepage/Footer';
import Contact from './components/Homepage/Contact';
import Products from './components/Homepage/Products';
import Home from './components/Homepage/Home';
import Testimonials from './components/Homepage/Testimonials';
import Features from './components/Homepage/Features';
import { useRef, useEffect, useState } from 'react';
import { BsAirplaneEnginesFill } from "react-icons/bs";

function App() {

  const home = useRef();
  const product = useRef();
  const testimonials = useRef();
  const contact = useRef();
  const feature = useRef();
  const scrollTop = useRef();

  const scrolHandler = (elmRef) => {
    // console.log(elmRef.current);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  };

  const scrollToTop = (elmRef) => {
    // console.log(elmRef.current);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 300) {
        setShow(true);
      }
      else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div className="position-relative d-flex flex-column mx-auto">
      <Container>
        <Navbar expand="lg" className='d-flex justify-content-between'>
          <Navbar.Brand className='fs-5 fw-bold py-5 text-Capitilize' style={{ color: "#7e79e6" }}>Jillion Technologies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto fw-semibold gap-4 ">
              <Nav.Link>
                <a onClick={() => scrolHandler(home)} className='a' style={{ color: "#7e79e6" }}>Home</a>
              </Nav.Link>
              <Nav.Link onClick={() => scrolHandler(feature)} className='a' style={{ color: "#7e79e6" }}>Features</Nav.Link>
              <Nav.Link onClick={() => scrolHandler(product)} className='a' style={{ color: "#7e79e6" }}>Products</Nav.Link>
              <Nav.Link onClick={() => scrolHandler(testimonials)} className='a' style={{ color: "#7e79e6" }}>Testimonials</Nav.Link>
              <Nav.Link onClick={() => scrolHandler(contact)} className='a' style={{ color: "#7e79e6" }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <div ref={home} >
        <Home />
      </div>
      <div ref={feature}>
        <Features />
      </div>
      <div ref={product}>
        <Products />
      </div>
      <div ref={testimonials}>
        <Testimonials />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
      <div >
        <BsAirplaneEnginesFill onClick={() => scrollToTop(scrollTop)} size={35} className={` text-secondary ${show === true ? 'd-block' : 'd-none'}`} style={{ position: 'fixed', right: 25, bottom: 50,backgroundColor:'transparent' }} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
