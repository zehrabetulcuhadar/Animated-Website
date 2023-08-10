import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default class NavbarCom extends Component {
  render() {
    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">HelloWorld</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
            <Nav.Link as={Link} to="/kullanicilar">Kullanıcılar</Nav.Link>
            <Nav.Link as={Link} to="/hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link as={Link} to="/iletisim">İletişim</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
