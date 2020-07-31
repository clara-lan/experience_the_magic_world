import React, { Component } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import PeoplePage from '../PeoplePage/PeoplePage';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
class App extends Component {
  constructor(){
    super();
    this.state={
      user: userService.getUser(),
    };
  }

  isLoggedin=()=>{
    if(this.state.user)return true;
  }

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
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route 
            exact
            path="/"
            render={()=>(
              <HomePage user={this.state.user}/>
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

          { this.isLoggedin()
          ?  
          <Route
            exact
            path={`/${this.state.user.id}/profile`}
            render={()=>(
              <ProfilePage user={this.state.user} isLoggedin={this.isLoggedin}/>
            )}
          />:
          <Route
          exact
          path={'/profile'}
          render={()=>(
            <ProfilePage isLoggedin={this.isLoggedin}/>
          )}
        />
        }
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
