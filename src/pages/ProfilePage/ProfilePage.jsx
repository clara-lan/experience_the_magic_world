import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import './ProfilePage.css';
import profileService from '../../utils/profileService';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    //update profile data
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    profileService.getProfile()
    .then(profiles => {
      this.setState({
        ...this.state,
        items: profiles
      });
    });
  }

  render = () => (
    <>
      <div>
        {this.state.items.map((item,index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="primary">Delete Profile</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <ProfileForm user={this.props.user}/>
      </div>
    </>
  );
}

export default ProfilePage;