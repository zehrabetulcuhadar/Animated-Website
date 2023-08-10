import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


const Slider = ({ variants }) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <Carousel style={{ width: '90%' }}>
        <Carousel.Item interval={2000}>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="img/slider1.jpg" />
              <Card.Body style={{background:'#d49861'}}>
                <Card.Title>First Slide Title</Card.Title>
                <Card.Text>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="img/slider2.jpg" />
              <Card.Body style={{background:'#d1d7ea'}}>
                <Card.Title>Second Slide Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider