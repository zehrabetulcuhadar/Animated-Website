import React from 'react'
import Cards from './Cards'
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledUserPage = styled.div`
background-color: #f0f0f0;
background-image: url('/img/space5.jpg');
background-size: cover;
background-position: center;
`;

const UsersPage = () => {
  const cardsContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2
      }
    }
  };
  
  const cardsItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const staggerDelay = 3;

  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.7}}}
    >
      <motion.div
        variants={cardsContainer}
        initial="hidden"
        animate="visible"
      >
        <StyledUserPage>
        <Cards variants={cardsItem} staggerDelay={staggerDelay}/>
        </StyledUserPage>
      </motion.div>
    </motion.div>
  )
}

export default UsersPage