import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  //send msg to userController.signup
  fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) 
      return res.json();
      // Probably a duplicate email
      throw new Error('Email already taken!');
    })
    .then(({ token }) => {
      tokenService.setToken(token);
    })
    .then(()=>{
      // redirect to homepage aftersignup
      window.location.href = '/';
    })
    
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      //try to catch the err
      if (res.ok) return res.json();
      throw new Error('Bad Credentials');
    })
    .then(({ token }) => {
      tokenService.setToken(token);
    })   
    .then(()=>{
      // redirect to homepage aftersignup
      window.location.href = '/';
    })
    ;
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
  window.location.href = '/';
}

export default {
  signup,
  getUser,
  logout,
  login,
};
