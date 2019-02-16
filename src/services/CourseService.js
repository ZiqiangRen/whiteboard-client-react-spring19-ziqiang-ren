const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const COURSE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/courses';


class CourseService {




  updateCourse = (cid, course) => 
        fetch(proxyUrl + COURSE_API_URL + '/' + cid, {
      body: JSON.stringify(course),
      headers: {
      'Content-Type': 'application/json' },
      method: 'PUT'
      })
      .then(response =>
         response.json());
  




  findAllCourses = () =>
       fetch(proxyUrl + COURSE_API_URL)
      .then(blob => blob.json());
    
       


  createCourse = () => 
    fetch(proxyUrl + COURSE_API_URL, {
      body: JSON.stringify({"title":"New Course","modules":[]}),
      headers: {
      'Content-Type': 'application/json' },
      method: 'POST'
      })
      .then(response =>
         response.json());
  


  deleteCourse = Id =>{
   fetch(proxyUrl + COURSE_API_URL + '/'+ Id, {
     method: 'delete',
     headers: {
       'content-type': 'application/json'}
    })
    .then(response => 
      response.json());
  }


  findCourseById = Id => 
      fetch(proxyUrl + COURSE_API_URL + '/'+ Id)
      .then(response => response.json())
  

}



export default CourseService