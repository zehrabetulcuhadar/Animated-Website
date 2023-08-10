import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion, AnimatePresence } from 'framer-motion';

const AboutCard = ({ item }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleCardClick = () => {
    setSelectedId(item.id === selectedId ? null : item.id);
  };

  return (
    <div className="mb-3" style={{ marginRight: '10px' }}>
      <motion.div layoutId={item.id} onClick={handleCardClick}>
        <Card
          style={{
            width: '100%',
            maxWidth: '700px',
            margin: '10px auto',
            zIndex: item.id === selectedId ? 2 : 1, // Selected card is on top
          }}
        >
          <Card.Header as="h5" style={{ background: '#ff84ec' }}>
            Featured
          </Card.Header>
          <Card.Body style={{ background: '#ffe7ff' }}>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </motion.div>
      <AnimatePresence>
        {selectedId === item.id && (
          <motion.div
            layoutId={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(255, 187, 255, 0.7)', 
            }}
          >
            <motion.div
              layoutId={item.id}
              style={{
                width: '90%',
                maxWidth: '800px',
              }}
            >
              <Card>
                <Card.Header as="h5" style={{ background: '#ff84ec' }}>
                  Featured
                </Card.Header>
                <Card.Body style={{ background: '#ffe7ff' }}>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary" onClick={handleCardClick}>
                    Go back
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AboutCard