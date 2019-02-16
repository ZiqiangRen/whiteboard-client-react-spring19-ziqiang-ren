import React from 'react'
import {Link} from 'react-router-dom'
import CourseRow from '../components/CourseRow'
import CourseService from "../services/CourseService"

const CourseTable = ({courses, deleteCourse, addCourse, selectCourse}) =>
<div>
<Link className="btn btn-success" to="/">To Grid View</Link>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Owned by</th>
      <th scope="col">Last Modified by me</th>
      <th scope="col">
        <a onClick={() => addCourse()}className="btn btn-success">Add Course</a>  
      </th>
    </tr>
  </thead>
  <tbody>
    {
        courses.map(course =>
          <CourseRow
            selectCourse={selectCourse}
            deleteCourse={deleteCourse}
            course={course}
            key={course.id}/>
        )
    }
  </tbody>
</table>
</div>



export default CourseTable
