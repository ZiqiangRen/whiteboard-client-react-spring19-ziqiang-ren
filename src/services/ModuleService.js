const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const MODULE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/modules';
const COURSE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/courses';

class ModuleService {




  updateModule = (mid, module) => 
        fetch(proxyUrl + MODULE_API_URL + '/' + mid, {
          body: JSON.stringify(module),
          headers: {
          'Content-Type': 'application/json' },
          method: 'PUT'
          })
          .then(response =>
             response.json());
  




  findAllModules = (cid) =>
       fetch(proxyUrl + COURSE_API_URL + '/' + cid + '/modules')
        .then(blob => blob.json()); 
       


  createModule = (cid, module) => 
    fetch(proxyUrl + COURSE_API_URL + '/' + cid + '/modules', {
      body: JSON.stringify(module),
      headers: {
      'Content-Type': 'application/json' },
      method: 'POST'
      })
      .then(response =>
         response.json());
  


  deleteModule = Id =>{
   fetch(proxyUrl + MODULE_API_URL + '/'+ Id, {
     method: 'delete',
     headers: {
       'content-type': 'application/json'}
    })
    .then(response => 
      response.json());
  }


  findModuleById = Id => 
      fetch(proxyUrl + MODULE_API_URL + '/'+ Id)
      .then(response => response.json())
  

}



export default ModuleService