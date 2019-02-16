import React from 'react'

const PillItem = ({topic, selectTopic, editTopic, deleteTopic, titleChanged, index, selectedTopicIndex}) =>
    <li className={index === selectedTopicIndex? "nav-item active":"nav-item"}>
      <a onClick={() => selectTopic(topic)}>{topic.title}</a>
      <a className = "float-right" onClick={() => editTopic(topic, titleChanged)}><i className="fa fa-edit">e</i></a>
      <a className = "float-right" onClick={() => deleteTopic(topic.id)}><i className="fa fa-trash">d</i></a>
      
    </li>

export default PillItem;



