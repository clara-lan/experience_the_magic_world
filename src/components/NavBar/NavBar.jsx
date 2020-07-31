import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ? (
    <div>
    <Navbar bg="light" expand="lg" user={props.user} handleLogout={props.handleLogout} >
      <Navbar.Brand href="/">Magic Adventure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">WELCOME, {props.user.name}</Nav.Link>
          <Nav.Link href={`/${props.user.id}/profile`}>My Profile</Nav.Link>
          <Nav.Link href="/people">Meet People</Nav.Link>
          <Nav.Link to="" className="NavBar-link" onClick={props.handleLogout}>
            LOG OUT
           </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search People by Name</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </div>
  ) : (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Magic Adventure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/profile">My Profile</Nav.Link>
          <Nav.Link href="/people">Meet People</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
