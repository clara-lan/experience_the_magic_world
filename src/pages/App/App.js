import React, { Component } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import PeoplePage from '../PeoplePage/PeoplePage';
import { Switch, Route } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
class App extends Component {

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };
  
  handleSignupOrLogin = async () => {
    this.setState({ user: userService.getUser() });}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Exlore Your Identity in Magic World
        </header>
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
            path="/login"
            render={()=>(
              <LoginPage handleSignupOrLogin={this.handleSignupOrLogin}/>
            )}
          />
          <Route 
            exact
            path="/signup"
            render={()=>(
              <SignupPage handleSignupOrLogin={this.handleSignupOrLogin}/>
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
