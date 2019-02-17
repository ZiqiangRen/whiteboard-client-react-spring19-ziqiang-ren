import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";
import CourseList from './CourseList';
import welcome from './welcome'
import login from './login'
import register from './register'
import profile from './profile'
class WhiteBoard extends Component {
  constructor(props) {
    super(props);
    this.courseService = new CourseService()
    this.state = {
      courses: [],
      selectedCourse: {}
    }
  }


  componentDidMount = () =>
    this.findAllCourses();
  componentDidUpdate =() =>
    this.findAllCourses();

  findAllCourses = () =>{
   this.courseService.findAllCourses()
       .then(courses => 
           this.setState({courses: courses}));
  }


  deleteCourse = (id) =>
    this.courseService.deleteCourse(id)


  addCourse = () =>
    this.courseService.createCourse().then(() =>
       this.findAllCourses());



  selectCourse = (course) =>
     this.setState({selectedCourse: course})


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>White Board</h1>
        </div>  
        <Router>
          <div>
            <Route path='/courselist' 
                   exact
                   render={() =>
                     <CourseList/>}/>

            <Route path="/course/:id"
                   exact
                   component={CourseEditor}/>

            <Route path='/' 
                    exact
                   component={welcome}/>
            <Route path='/login' 
                    exact
                   component={login}/>
            <Route path='/register' 
                    exact
                   component={register}/>
            <Route path='/profile' 
                    exact
                   component={profile}/>

            <Route path='/grid' 
                   exact
                   render={() =>
                     <CourseGrid
                       selectCourse={this.selectCourse}
                       addCourse={this.addCourse}
                       deleteCourse={this.deleteCourse}
                       courses={this.state.courses}/>}/>
            <Route path='/table'
                   render={() => 
                    <CourseTable 
                       selectCourse={this.selectCourse}
                       addCourse={this.addCourse}
                       deleteCourse={this.deleteCourse}
                       courses={this.state.courses}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default WhiteBoard;