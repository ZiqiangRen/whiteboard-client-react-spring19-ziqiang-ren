import React from 'react'
import TopicPills from "./TopicPills";
import LessonItem from './LessonItem'
import ReactDOM from "react-dom";
export default class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: 0,
      selectedLessonIndex: 0,
          lesson: {
            id: 0,
            title: 'New Lesson',
            topics: []
          }
        }
  }


  selectLesson = (index) => {
    this.setState({
      selectedLessonIndex: index
    })
  }


  titleChanged = (event) =>
     this.setState({
          lesson: {
            id: this.state.lesson.id,
            title: event.target.value,
            topic: this.state.topics
          }
     });



  editLesson = (edt) =>{
    const node = ReactDOM.findDOMNode(this);
    const child = node.querySelector('input');

    this.setState({lesson: edt}, () => {child.value = edt.title});
    this.setState({update: 1});
    
  }

  handleClick = () =>{
    this.state.update===0? this.props.createLesson(this.state.lesson) :  this.props.updateLesson(this.state.lesson)
    this.setState({update: 0});
  }


  createTopic = (topic) =>
     this.props.createTopic(this.props.module.lessons[this.state.selectedLessonIndex].id, topic)

  deleteTopic = (tid) =>
     this.props.deleteTopic(tid)

  updateTopic = (topic) =>
{  console.log(topic);
       this.props.updateTopic(topic)}







  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          { 
    
            this.props.module.lessons.map(
              (lesson, i) => {
                return (
                   <LessonItem
                    selectLesson={this.selectLesson}
                    editLesson={this.editLesson}
                    deleteLesson={this.props.deleteLesson}
                    titleChanged={this.titleChanged}
                    selectedLessonIndex={this.state.selectedLessonIndex}
                    key={i}
                    index={i}
                    lesson={lesson}/>
                )
              }
            )
          }
        <li className="nav-item">
            <div className="input-group">
            <input
              onChange={this.titleChanged}
              className="form-control"
              placeholder="New Lesson"/>
            <button
              onClick={this.handleClick}
              className="btn btn-primary"><i className="fa fa-plus"></i></button>
            </div>
          </li>
        </ul>
        <br/>
      { 
        this.props.module.lessons.length!==0 &&
          <TopicPills 
            lesson={this.props.module.lessons[this.state.selectedLessonIndex]}
            createTopic={this.createTopic}
            deleteTopic={this.deleteTopic}
            updateTopic={this.updateTopic}
            />
      }
      </div>
    )
  }
}