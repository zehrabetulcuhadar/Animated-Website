import React from 'react';
import Card from 'react-bootstrap/Card';

const AboutQuote = () => {
  return (
    <div>
        <Card style={{ width: '70%', margin: '20px' }}>
            <Card.Header style={{background:'#a0c88d'}}>Quote</Card.Header>
            <Card.Body style={{background:'#cfdbca'}}>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </div>
  )
}

export default AboutQuote