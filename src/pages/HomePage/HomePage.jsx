import React from 'react';
import {Link} from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function HomePage(props){
  console.log(props.user);
  return (
    <div>
      { props.user 
        ?
        <Link to={`/${props.user.id}/profile`}>Click to check your role</Link>
        :
        <Alert variant="success">
          <Link to='/login'><Alert.Heading>Please Log in to create your profile!</Alert.Heading></Link>
         </Alert>
      }
    </div>
  )
};

export default HomePage;