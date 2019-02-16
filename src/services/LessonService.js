const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const MODULE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/modules';
const COURSE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/courses';
const LESSON_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/lessons';
class LessonService {




  updateLesson = (lid, lesson) => 
        fetch(proxyUrl + LESSON_API_URL + '/' + lid, {
          body: JSON.stringify(lesson),
          headers: {
          'Content-Type': 'application/json' },
          method: 'PUT'
          })
          .then(response =>
             response.json());
  




  findAllLessons = (mid) =>
       fetch(proxyUrl + MODULE_API_URL + '/' + mid + '/lesson')
        .then(blob => blob.json()); 
       


  createLesson = (mid, lesson) => 
    fetch(proxyUrl + MODULE_API_URL + '/' + mid + '/lesson', {
      body: JSON.stringify(lesson),
      headers: {
      'Content-Type': 'application/json' },
      method: 'POST'
      })
      .then(response =>
         response.json());
  


  deleteLesson = lid =>{
   fetch(proxyUrl + LESSON_API_URL + '/'+ lid, {
     method: 'delete',
     headers: {
       'content-type': 'application/json'}
    })
    .then(response => 
      response.json());
  }


  findLessonById = lid => 
      fetch(proxyUrl + LESSON_API_URL + '/'+ lid)
      .then(response => response.json())
  

}



export default LessonService