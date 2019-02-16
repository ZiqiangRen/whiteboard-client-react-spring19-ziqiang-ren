import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse, selectCourse}) =>
  <div className="card">
	    <img className="card-img-top"
	         src="https://picsum.photos/300/200"/>
	    <div className="card-body">
	      <h5 className="card-title">{course.title}</h5>
	      <p className="card-text">Card text.</p>
	      <Link className="btn btn-primary" onClick={() => selectCourse(course)} to={`/course/${course.id}`}>Edit</Link>
	      <a onClick={() => deleteCourse(course.id)}
	         className="btn btn-danger">Del</a>
	    </div>
    </div>

export default CourseCard;
