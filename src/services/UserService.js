const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const USER_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/user';
const LOGIN_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/login';
const LOGOUT_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/logout';
const REGISTER_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/register';
const PROFILE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/profile';
class UserService {

  findAllUsers = () =>
   fetch(proxyUrl + USER_API_URL)
  .then(blob => blob.json());
    


  findUserById = Id => 
      fetch(proxyUrl + USER_API_URL + '/'+ Id)
      .then(response => response.json())


  login = (nameandpin) => 
    fetch(proxyUrl + LOGIN_API_URL, {
      body: JSON.stringify(nameandpin),
      headers: {
      'Content-Type': 'application/json' },
      method: 'POST'
      })
      .then(response =>
         response.json());


    logout = () => 
    fetch(proxyUrl + LOGOUT_API_URL, {
      body: JSON.stringify({}),
      headers: {
      'Content-Type': 'application/json' },
      method: 'POST'
      })
      .then(response =>
         response.json()); 

  getProfile = () =>
   fetch(proxyUrl + PROFILE_API_URL)
  .then(response => response.json());


   register = (nameandpin) => 
    fetch(proxyUrl + REGISTER_API_URL, {
      body: JSON.stringify(nameandpin),
      headers: {
      'Content-Type': 'application/json' },
      method: 'POST'
      })
        .then(response =>
         response.json());
}

export default UserService;