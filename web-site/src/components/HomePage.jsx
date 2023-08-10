import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ColoredDivs from './ColoredDivs';
import { motion } from 'framer-motion';


const StyledHomePage = styled.div`
  height: calc(100vh); 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  font-size: 100px;
  font-weight: bold;
  position: relative; 
`;

const BackgroundImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; 
`;

const TextBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); 
  z-index: -4; 
`;

const TextContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HomePage = () => {
  const textToType = "Hello World :)";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText((prevTypedText) => {
        currentIndex++;
        return textToType.substring(0, currentIndex);
      });
      if (currentIndex >= textToType.length) {
        clearInterval(interval);
      }
    }, 400); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
    >
      <StyledHomePage>
      <BackgroundImage
          src="/img/galaxy.jpg"
          alt="Background Image"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
        />
        <TextBackground />
        <TextContent>
          {typedText}
        </TextContent>
      </StyledHomePage>
      <ColoredDivs />
    </motion.div>
  )
}

export default HomePage