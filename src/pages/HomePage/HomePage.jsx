import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import ProfilePage from '../ProfilePage/ProfilePage';

function HomePage(props){
  return (
    <div>
    <Navbar bg="light" expand="lg" user={props.user} handleLogout={props.handleLogout} >
      <Navbar.Brand href="/">Magic Adventure</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">My Profile</Nav.Link>
          <Nav.Link href="/people">Meet People</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search People by Name</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
      <ProfilePage />
    </div>
  )
};

export default HomePage;