// BootProfile.js

import { useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';



const MyToast = ({ children }) => {
  const [show, toggleShow] = useState(false);
  return (
    <>
      {!show && (
        <Button className="bg-danger" onClick={() => toggleShow(true)}>
          Show Me
        </Button>
      )}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong>My Profile</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};
const BootProfile = () => {
  return (
    <Container className="p-3">
      <Navbar bg="success" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand>Peter Lee's Page</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Profile</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="p-5 mt-5 bg-light rounded-3">
        <h1 className="header">Welcome to My Portfolio Web</h1>
        <MyToast>I'm a experienced Web Developer since 2010.</MyToast>
      </Container>
    </Container>
  );
};
export default BootProfile;
