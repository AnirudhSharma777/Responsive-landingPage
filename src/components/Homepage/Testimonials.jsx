import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './TestimonialSlider.css';

const Testimonials = () => {

    const data = [
        {
            id: 1,
            img: "https://media.istockphoto.com/id/915669474/photo/portrait-of-a-beautiful-asian-girl.webp?b=1&s=170667a&w=0&k=20&c=ChWmwNdHld-kZZ0RbHmegYvZcSnIRi1z_9CR1_mxTOw=",
            para: "Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.",
            name: "Paula Wilson",
            passion: "Media Analyst",
        },
        {
            id: 2,
            img: "https://media.istockphoto.com/id/915669474/photo/portrait-of-a-beautiful-asian-girl.webp?b=1&s=170667a&w=0&k=20&c=ChWmwNdHld-kZZ0RbHmegYvZcSnIRi1z_9CR1_mxTOw=",
            para: "Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.",
            name: "John Doe",
            passion: "Software Engineer",
        },
        {
            id: 3,
            img: "https://media.istockphoto.com/id/915669474/photo/portrait-of-a-beautiful-asian-girl.webp?b=1&s=170667a&w=0&k=20&c=ChWmwNdHld-kZZ0RbHmegYvZcSnIRi1z_9CR1_mxTOw=",
            para: "Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.",
            name: "Jane Smith",
            passion: "Marketing Manager",
        },
    ];
    return (
        <Container className="py-5">
            <div className='text-center mt-4'>
                <h3 className='text-uppercase'>Testimonials</h3>
            </div>
            <Carousel className="testimonial-carousel"
            
            prevIcon={<FaArrowLeft className="text-secondary mt-4" size={25} />}
            nextIcon={<FaArrowRight className="text-secondary mt-4" size={25} />}>
                {
                    data.map((item) => (
                        <Carousel.Item key={item.id} className='mt-5 mb-5'>
                            <div className="text-center">
                                <img
                                    className="d-block mx-auto rounded-circle shadow"
                                    src="https://via.placeholder.com/100"
                                    alt="John Doe"
                                />
                                <p className="mt-4 w-75 mx-auto ">
                                    {item.para}
                                </p>
                                <h5 className="text-success">{item.name},{" "}<small className='text-secondary'>{item.passion}</small></h5>
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </Container>
    )
}

export default Testimonials