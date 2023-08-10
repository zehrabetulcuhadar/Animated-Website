import React from 'react'
import FormContact from './FormContact'
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledContactPage = styled.div`
background-color: #78a3fd;
background-size: cover;
background-position: center;
`;

const Contact = () => {

  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.7}}}
    >
      <StyledContactPage>
        <FormContact/>
      </StyledContactPage>
    </motion.div>
  )
}

export default Contact