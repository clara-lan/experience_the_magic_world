import tokenService from './tokenService';

export default{
  createAndUpdate,
  getProfile
}

const BASE_URL='/api/users/';

function createAndUpdate(user){
  const userInfo = tokenService.getUserFromToken();
  //add id into user
  user.userId = userInfo.id;
  fetch(`${BASE_URL}${user.name}/profile`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user),
  })
  .then(()=>{
    // redirect to homepage aftersignup
    window.location.href = '/';
  });
}

async function getProfile() {
  const userInfo = tokenService.getUserFromToken();
  const res = await fetch(`${BASE_URL}${userInfo.id}/profile`)
  const jsonData = await res.json();
  return jsonData;
}