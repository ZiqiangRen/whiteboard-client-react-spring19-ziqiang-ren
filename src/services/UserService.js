//const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const proxyUrl = ''
//'https://powerful-beach-47172.herokuapp.com/api/user';
const USER_API_URL = "http://localhost:8080/api/user"
const LOGIN_API_URL = "http://localhost:8080/api/login"
const LOGOUT_API_URL = "http://localhost:8080/api/logout"
const REGISTER_API_URL = "http://localhost:8080/api/register"
const PROFILE_API_URL = "http://localhost:8080/api/profile"
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
      headers: 
          {
          'Content-Type': 'application/json' },
      credentials:'include',
      method: 'POST'
      })
      .then(response =>
         response.json());


    logout = () => 
    fetch(proxyUrl + LOGOUT_API_URL, {
      body: JSON.stringify({}),
      headers: {
      'Content-Type': 'application/json' },
      credentials:'include',
      method: 'POST'
      })
      .then(response =>
         response.json()); 

  getProfile = () =>
   fetch(proxyUrl + PROFILE_API_URL,{
      headers: {
      'Content-Type': 'application/json' },
      credentials:'include',
      method: 'GET'
      })
        .then(function(response){
     return response.json();

});


   register = (nameandpin) => 
    fetch(proxyUrl + REGISTER_API_URL, {
      body: JSON.stringify(nameandpin),
      headers: {
      'Content-Type': 'application/json' },
      credentials:'include',
      method: 'POST'
      })
        .then(response =>
         response.json());

   updateUser = (uid, user) => 
    fetch(proxyUrl + USER_API_URL + '/' + uid, {
      body: JSON.stringify(user),
      headers: {
      'Content-Type': 'application/json' },
      credentials:'include',
      method: 'PUT'
      })
        .then(response =>
         response.json());

}

export default UserService;