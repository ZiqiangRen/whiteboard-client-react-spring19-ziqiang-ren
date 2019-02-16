import React from 'react'
import CourseCard from '../components/CourseCard'
import {Link} from 'react-router-dom'
import NewCourseCard from "../components/NewCourseCard"
import CourseService from "../services/CourseService"

const CourseGrid = ({courses, deleteCourse, addCourse, selectCourse}) =>
  <div>
  <Link className="btn btn-success" to="/table">To Table View</Link>
  <div className="card-deck container-fluid">
    {
        courses.map(course =>
          <div className="col-sm-12 col-md-4 col-lg-2 row-eq-height">
            <CourseCard
              selectCourse={selectCourse}
              deleteCourse={deleteCourse}
              course={course}
              key={course.id}/>
          </div>
        )
    }
    <div className="col-sm-12 col-md-4 col-lg-2 row-eq-height">
      <NewCourseCard
        addCourse={addCourse}/>
    </div>
  </div>
 </div>

export default CourseGrid;