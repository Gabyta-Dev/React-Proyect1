import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/**IMPORTS DE BOOTSRAP **********/

import { Carrito } from "./icons";

export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Noir</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link  href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Cuenta</Nav.Link>
      </Nav><Carrito />
    </Container>
  </Navbar>
 
);