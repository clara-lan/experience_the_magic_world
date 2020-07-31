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
        //if future state added, inherited by ...(spreader)
        // ...this.state,
        items: profiles
      });
    });
  }

  render = () => (
    <>
      <div>
        <ProfileForm user={this.props.user}/>
      </div>
      <div className='cardContainer'>
        {this.state.items.map((item,index) => (
          <Card key={index} style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                <ul>
                  <li >
                    Role:{item.role}
                  </li>
                  <li>
                    House:{item.house}
                  </li>
                  <li>
                    BloodStatus:{item.bloodStatus}
                  </li>
                </ul>
              </Card.Text>
              <Button variant="primary">View Details</Button>
              &nbsp;
              <Button variant="primary">Delete Profile</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
 
    </>
  );
}

export default ProfilePage;