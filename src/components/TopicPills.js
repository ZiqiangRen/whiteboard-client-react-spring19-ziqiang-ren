import React from 'react'
import PillItem from "./PillItem";
import LessonItem from './LessonItem'
import ReactDOM from "react-dom";

import WidgetListContainer from '../containers/WidgetListContainer'
import widgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

export default class TopicPills extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(widgetReducer);
    console.log(props.lesson);
    this.state = {
      update: 0,
      selectedTopicIndex: 0,
            topic: {
              id:0,
              title: 'New Topic'
            }
        }
  }


  selectTopic = (index) => {
    console.log(index)
    this.setState({
      selectedTopicIndex: index
    })
  }


  titleChanged = (event) =>
     this.setState({
            topic: {
              id:this.state.topic.id,
              title: event.target.value
            }
     });



  editTopic = (edt) =>{
    const node = ReactDOM.findDOMNode(this);
    const child = node.querySelector('input');

    this.setState({topic: edt}, () => {child.value = edt.title});
    this.setState({update: 1});
    
  }

  handleClick = () =>{
    this.state.update===0? this.props.createTopic(this.state.topic) :  this.props.updateTopic(this.state.topic)
    this.setState({update: 0});
  }

  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          {
            this.props.lesson.length!==0 &&
            this.props.lesson.topics.map(
              (topic, i) => {
                return (
                   <PillItem
                    selectTopic={this.selectTopic}
                    editTopic={this.editTopic}
                    deleteTopic={this.props.deleteTopic}
                    titleChanged={this.titleChanged}
                    selectedTopicIndex={this.state.selectedTopicIndex}
                    key={i}
                    index={i}
                    topic={topic}/>
                )
              }
            )
          }
        <li className="nav-item">
            <div className="input-group">
            <input
              onChange={this.titleChanged}
              className="form-control"
              placeholder="New Topic"/>
            <button
              onClick={this.handleClick}
              className="btn btn-primary"><i className="fa fa-plus"></i></button>
            </div>
          </li>
        </ul>
            <Provider store={this.store}>
              <WidgetListContainer/>
            </Provider>
      </div>
    )
  }
}