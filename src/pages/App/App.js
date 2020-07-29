import React, { Component } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import PeoplePage from '../PeoplePage/PeoplePage';
import { Switch, Route } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
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
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search People by Name</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        </header>
        <Switch>
          <Route 
            exact
            path="/"
            render={()=>(
              <HomePage />
            )}
          />
          <Route 
            exact
            path="/profile"
            render={()=>(
              <ProfilePage />
            )}
          />
          <Route
            exact
            path="/people"
            render={()=>(
              <PeoplePage />
            )}
          />

        
        </Switch>
      </div>
    );
  }
}

export default App;
