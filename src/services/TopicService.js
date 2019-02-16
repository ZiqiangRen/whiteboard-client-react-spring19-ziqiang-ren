const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const MODULE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/modules';
const COURSE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/courses';
const LESSON_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/lessons';
const TOPIC_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/topics';
class TopicService {




  updateTopic = (tid, topic) => 
        fetch(proxyUrl + TOPIC_API_URL + '/' + tid, {
          body: JSON.stringify(topic),
          headers: {
          'Content-Type': 'application/json' },
          method: 'PUT'
          })
          .then(response =>
             response.json());
  




  findAllTopics = (lid) =>
       fetch(proxyUrl + LESSON_API_URL + '/' + lid + '/topic')
        .then(blob => blob.json()); 
       


  createTopic = (lid, topic) => 
    fetch(proxyUrl + LESSON_API_URL + '/' + lid + '/topic', {
      body: JSON.stringify(topic),
      headers: {
      'Content-Type': 'application/json' },
      method: 'POST'
      })
      .then(response =>
         response.json());
  


  deleteTopic = tid =>{
   fetch(proxyUrl + TOPIC_API_URL + '/'+ tid, {
     method: 'delete',
     headers: {
       'content-type': 'application/json'}
    })
    .then(response => 
      response.json());
  }


  findTopicById = tid => 
      fetch(proxyUrl + TOPIC_API_URL + '/'+ tid)
      .then(response => response.json())
  

}



export default TopicService