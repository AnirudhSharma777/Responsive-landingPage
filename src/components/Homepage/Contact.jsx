import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {
    const [formdata, setFormData] = useState({
        firstname:"",
        email:"",
        message:"",
    });

    const {firstname,email,message} = formdata;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name] : e.target.value,
        }))
      }

    const onSumbitHandler = (e) =>{
        e.preventDefault();
        // console.log(formdata);
        toast.success("Over Team will Contact you soon")

        // axios.post('http://localhost:4000/api/contactus', formdata)
        // .then((response)=> {
        //     // Handle success
        //     console.log('Success:', response.data);
        //     toast.success("Over Team will Contact you soon");
        // })
        // .catch(function(error) {
        //     // Handle error
        //     console.error('Error:', error);
        //     toast.error("Something went wrong");
            
        // });
        setFormData("");
    }
    return (
        <Container  className="py-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Row className="justify-content-center d-flex">
                <Col md={4} lg={6} className="d-none d-md-block">
                    <img src="https://beardbros.in/wp-content/uploads/2023/12/Contact_me-5ec7b80501d0360014d4d0f7.png"  alt='contactUs' className='w-100' />
                </Col>
                <Col md={6} lg={6} className='pt-md-5'>

                    <Form className='gap-5 py-3' onSubmit={onSumbitHandler}>
                        <Form.Group controlId="formName" className='gap-1'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" name='firstname' value={firstname} required onChange={handleOnChange}/>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className='gap-1'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" name='email' value={email} required onChange={handleOnChange}/>
                        </Form.Group>

                        <Form.Group controlId="formMessage" className='gap-1'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" name='message' value={message}
                            required onChange={handleOnChange}/>
                        </Form.Group>

                        <Button type="submit"  className="w-auto mt-4 rounded shadow " style={{backgroundColor:"#7e79e6"}}>
                            Submit
                        </Button>
                    </Form>
                </Col>

            </Row>
        </Container>
    );
}

export default Contact;