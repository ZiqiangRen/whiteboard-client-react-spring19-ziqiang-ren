import React from 'react';
import ModuleList from '../components/ModuleList'


import CourseService from '../services/CourseService'
import ModuleService from '../services/ModuleService'
import LessonService from '../services/LessonService'
import TopicService from '../services/TopicService'




class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.courseService = new CourseService();
    this.moduleService = new ModuleService();
    this.lessonService = new LessonService();
    this.topicService = new TopicService();
    this.state = {
      course: {
        modules: [{
          title: '',
          lessons: [{
            title: '',
            topics: [{
              title: ''
            }]
          }]
        }]
      }
    }
  }


  componentDidMount = () =>{
    this.courseService.findCourseById(
            parseInt(this.props.match.params.id))
              .then(course => this.setState({course: course}));
    }

  componentDidUpdate =() =>
    this.courseService.findCourseById(
            parseInt(this.props.match.params.id))
              .then(course => this.setState({course: course}));
  

  createModule = (module) =>
     this.moduleService.createModule(parseInt(this.props.match.params.id), module)
          .then(() => this.componentDidUpdate());

  deleteModule = (mid) =>
     this.moduleService.deleteModule(mid)

  updateModule = (module) =>{
      console.log(module);
       this.moduleService.updateModule(module.id, module)
            .then(() => this.componentDidUpdate());   }  




  createLesson = (mid, lesson) =>
     this.lessonService.createLesson(mid, lesson)
          .then(() => this.componentDidUpdate());

  deleteLesson = (lid) =>
     this.lessonService.deleteLesson(lid)

  updateLesson = (lesson) =>{
    console.log(lesson);
       this.lessonService.updateLesson(lesson.id, lesson)
            .then(() => this.componentDidUpdate());   }     




  createTopic = (lid, topic) =>
     this.topicService.createTopic(lid, topic)
          .then(() => this.componentDidUpdate());

  deleteTopic = (tid) =>
     this.topicService.deleteTopic(tid)

  updateTopic = (topic) =>{
       this.topicService.updateTopic(topic.id, topic)
            .then(() => this.componentDidUpdate());   }     
  // findAllModules = () =>     
  // findAllModules = () =>
  //    this.moduleService.findAllModules(parseInt(this.props.match.params.id))
  //        .then(modules => this.setState({course.modules: modules}));
 render() { 
 	return(
      <div>
        <h2>Course Editor: {this.props.match.params.id}</h2>
        <h3>{this.state.course.title}</h3>
        <ModuleList 
          course={this.state.course}
          createModule={this.createModule}
          deleteModule={this.deleteModule}
          updateModule={this.updateModule}
          createLesson={this.createLesson}
          deleteLesson={this.deleteLesson}
          updateLesson={this.updateLesson}
          createTopic={this.createTopic}
          deleteTopic={this.deleteTopic}
          updateTopic={this.updateTopic}
        />
      </div>
    );
  }
}



export default CourseEditor