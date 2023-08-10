import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import UsersPage from './UsersPage';
import About from './About';
import Contact from './Contact';
import HomePage from './HomePage';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
  
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/kullanicilar" element={<UsersPage />}/>
          <Route exact path="/hakkimizda" element={<About />}/>
          <Route exact path="/iletisim" element={<Contact />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes