import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import img from '../../images/feature1.jpg';
import img1 from '../../images/feature.jpg';
import img2 from '../../images/feature2.jpg';


const Features = () => {

  const features = [
    {
      id:1,
      title: "Card title",
      img:img,
      para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id:2,
      title: "Card title",
      img:img1,
      para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id:3,
      title: "Card title",
      img:img2,
      para: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  ];

  return (
    <div className=''>
      <Container>
        <h2 className='text-center p-3'>Features</h2>
        {
          features.map((item) => (
            <Row className={`d-flex flex-column mb-3 ${item.id % 2 === 0 ? 'flex-md-row-reverse':'flex-md-row '}`}> 
              <Col>
              <img src={item.img} alt="" className='w-100 h-75' />
              </Col>
              <Col className='py-4 d-flex justify-content-center gap-2'>
                <div className="card-body">
                  <h5 class="card-title ">{item.title}</h5>
                  <p className="card-text w-75">{item.para}</p>
                </div>
              </Col>
            </Row>
          ))
        }
      </Container>
    </div>
  )
}

export default Features