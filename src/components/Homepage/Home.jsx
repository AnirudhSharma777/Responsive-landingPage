import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import homeImage from '../../images/homeImage.jpg';
import toast from 'react-hot-toast';

const Home = () => {
   
  return (
    <div>
        <Container>
            <Row className='py-5  mb-5 d-flex flex-md-row flex-column-reverse'>
                <Col className='d-flex flex-column gap-5 gap-sm-3 '>
                    <div className='w-100'>
                        <h1 className='text-uppercase'style={{color:"#7e79e6"}}>We Make Your Idea's {" "}</h1>
                        <h1 className='text-uppercase'><span style={{color:"#fd9b6a"}}>Into Reality</span></h1>
                    </div>
                    <p className='w-100'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>

                    <div className='d-flex flex-row  gap-3 align-items-center'>
                        <button className='btn text-white fw-medium shadow p-2' style={{backgroundColor:"#7e79e6"}} onClick={() => {toast.success("This is FrontEnd UI Only")}}>Get Started</button>
                        <button className='btn btn-outline-secondary fw-medium ms-4 p-2' onClick={() => {toast.success("Go to bottom")}}>Contact Us</button>
                    </div>
                </Col>
                <Col  className='w-100'>
                    <img className='w-100 h-100 d-flex justify-content-center align-items-center' src={homeImage} alt="homeimage" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home