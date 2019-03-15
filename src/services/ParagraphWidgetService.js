const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const MODULE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/modules';
const COURSE_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/courses';
const LESSON_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/lessons';
const TOPIC_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/topics';
const PARAGRAPH_WIDGET_API_URL = 'http://powerful-beach-47172.herokuapp.com/api/paragraph/widgets';
class ParagraphWidgetService {


  updateParagraphWidget = (wid, widget) => 
        fetch(proxyUrl + PARAGRAPH_WIDGET_API_URL + '/' + wid, {
          body: JSON.stringify(widget),
          headers: {
          'Content-Type': 'application/json' },
          method: 'PUT'
          })
          .then(response =>
             response.json());
  

  deleteParagraphWidget = wid =>{
   fetch(proxyUrl + PARAGRAPH_WIDGET_API_URL + '/'+ wid, {
     method: 'delete',
     headers: {
       'content-type': 'application/json'}
    })
    .then(response => 
      response.json());
  }


  findParagraphWidgetById = wid => 
      fetch(proxyUrl + PARAGRAPH_WIDGET_API_URL + '/'+ wid)
      .then(response => response.json())
  



  // findAllWidgets = (tid) =>
  //      fetch(proxyUrl + TOPIC_API_URL + '/' + tid + '/widget')
  //       .then(blob => blob.json()); 
       


  // createWidget = (tid, widget) => 
  //   fetch(proxyUrl + TOPIC_API_URL + '/' + tid + '/widget', {
  //     body: JSON.stringify(widget),
  //     headers: {
  //     'Content-Type': 'application/json' },
  //     method: 'POST'
  //     })
  //     .then(response =>
  //        response.json());

}



export default ParagraphWidgetService