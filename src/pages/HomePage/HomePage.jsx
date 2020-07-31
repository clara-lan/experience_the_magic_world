import React from 'react';
import {Link} from 'react-router-dom';

function HomePage(props){
  console.log(props.user);
  return (
    <div>
      <Link to={`/${props.user.id}/profile`}>Click to check your role</Link>
    </div>
  )
};

export default HomePage;