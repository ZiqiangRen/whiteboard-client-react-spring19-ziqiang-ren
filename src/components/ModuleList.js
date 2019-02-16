import React from 'react'
import LessonTabs from './LessonTabs'
import ModuleListItem from './ModuleListItem'
import ReactDOM from "react-dom";

export default class ModuleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      update: 0,
      selectedModuleIndex: 0,
      module: {
          id:0,
          title: 'New Module',
          lessons: [{
            title: 'New Lesson',
            topics: [{
              title: 'New Topic'
            }]
          }]
        }}
  }



  selectModule = (index) => {
    console.log(index);
    this.setState({
      selectedModuleIndex: index
    });
  };


  titleChanged = (event) =>
     this.setState({
         module: {
          id:this.state.module.id,
          title: event.target.value,
          lessons: [{
            title: 'New Lesson',
            topics: [{
              title: 'New Topic'
            }]
          }]
        }
     });



  editModule = (edt) =>{
   
    const node = ReactDOM.findDOMNode(this);
    const child = node.querySelector('input');

    this.setState({module: edt}, () => {child.value = edt.title});
    this.setState({update: 1});
    
  }

  handleClick = () =>{
    this.state.update===0? this.props.createModule(this.state.module) :  this.props.updateModule(this.state.module)
    this.setState({update: 0});
  }



  createLesson = (lesson) =>
     this.props.createLesson(this.props.course.modules[this.state.selectedModuleIndex].id, lesson)

  deleteLesson = (lid) =>
     this.props.deleteLesson(lid)

  updateLesson = (lesson) =>
{  console.log(lesson);
       this.props.updateLesson(lesson)}




  render() {
    return (
      <div className="row">
        <div className="col-4">
        <h3>Module List {this.props.course.modules[0].title}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="input-group">
              <input
                onChange={this.titleChanged}
                className="form-control"
                placeholder="New Module"/>
              <button
                onClick={this.handleClick}
                className="btn btn-primary"><i className="fa fa-plus">+</i></button>
            </div>
          </li>
          { this.props.course.modules.length!==0 &&
            this.props.course.modules.map(
              (module, i) => {
                return (
                  <ModuleListItem
                    selectModule={this.selectModule}
                    editModule={this.editModule}
                    deleteModule={this.props.deleteModule}
                    titleChanged={this.titleChanged}
                    selectedModuleIndex={this.state.selectedModuleIndex}
                    key={i}
                    index={i}
                    module={module}/>
                )
              }
            )
          }
        </ul>
        </div>
      { this.props.course.modules[this.state.selectedModuleIndex].lessons.length!==0 &&
        <div className="col-8">
          <LessonTabs 
            module={this.props.course.modules[this.state.selectedModuleIndex]}
            createLesson={this.createLesson}
            deleteLesson={this.deleteLesson}
            updateLesson={this.updateLesson}
            createTopic={this.props.createTopic}
            deleteTopic={this.props.deleteTopic}
            updateTopic={this.props.updateTopic}
            />
        </div>}
      </div>
    )
  }
}