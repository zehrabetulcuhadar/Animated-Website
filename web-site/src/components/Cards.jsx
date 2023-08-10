import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Cards = ({ variants }) => {
  const numberOfCards = 10;
  const [users, setUsers] = useState([]);
  const [buttonHovered, setButtonHovered] = useState(Array(numberOfCards).fill(false));

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const usersData = response.data.slice(0, numberOfCards);
        const sortedUsers = usersData.sort((a, b) => 
          a.username.localeCompare(b.username));
        setUsers(sortedUsers);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  

  const cardStyle = {
    width: '18rem',
    margin: '10px',
  };

  const titleStyle = {
    textAlign: 'center',
    background: '#e5b0e5',
    padding: '6px',
    borderRadius: '15px', // Başlık kısmına border-radius eklendi
  };

  const imgStyle = {
    borderTopLeftRadius: '15px', // Kart içindeki resmin üst sol tarafı yuvarlak
    borderTopRightRadius: '15px', // Kart içindeki resmin üst sağ tarafı yuvarlak
  };

  const buttonStyle = {
    background: '#73d685',
    border: 'none',
    borderRadius: '10px', // Butona border-radius eklendi
    transition: 'background 0.3s',
  };

  const buttonHoverStyle = {
    background: '#5abf5a', // Hover rengi
  };

  const handleButtonHover = (index) => {
    const newButtonHovered = [...buttonHovered];
    newButtonHovered[index] = !newButtonHovered[index];
    setButtonHovered(newButtonHovered);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map((user, index) => (
        <motion.div
        className='card-container'
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
          <Card style={cardStyle}>
            <Card.Img variant="top" src="img/user.jpg" style={imgStyle} />
            <Card.Body style={{ background: '#b0d5ab', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',}}>
              <Card.Title style={titleStyle}>
                {user.username}
              </Card.Title>
              <Card.Text>
              
                Phone: {user.phone} <br/>
                Email: {user.email} <br/>
                Website: {user.website}
              
              </Card.Text>
              <Button
                variant="primary"
                style={{
                  ...buttonStyle,
                  background: buttonHovered[index] ? buttonHoverStyle.background : buttonStyle.background
                }}
                onMouseEnter={() => handleButtonHover(index)}
                onMouseLeave={() => handleButtonHover(index)}
              >
                Kullanıcıyı Görüntüle
              </Button>
            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default Cards