import React from 'react'

const LessonItem = ({lesson, selectLesson, editLesson, deleteLesson, titleChanged, index, selectedLessonIndex}) =>
    <li className={index === selectedLessonIndex? "nav-link active":"nav-link"}>
      <a onClick={() => selectLesson(index)}>{lesson.title}</a>
      <a className = "float-right" onClick={() => editLesson(lesson, titleChanged)}><i className="fa fa-edit">e</i></a>
      <a className = "float-right" onClick={() => deleteLesson(lesson.id)}><i className="fa fa-trash">d</i></a>
    </li>

export default LessonItem;



