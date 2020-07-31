import React from 'react';
import ProfileTable from '../../components/ProfileTable/ProfileTable';

function ProfilePage(props){
  return (
    <div>
      <ProfileTable user={props.user}/>
    </div>
  )
};

export default ProfilePage;