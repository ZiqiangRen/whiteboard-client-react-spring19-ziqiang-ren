import React from 'react'

const PillItem = ({topic, selectTopic, editTopic, deleteTopic, titleChanged, index, selectedTopicIndex}) =>
    <li className={index === selectedTopicIndex? "nav-link active":"nav-link"}>
      <a onClick={() => selectTopic(index)}>{topic.title}</a>
      <a className = "float-right" onClick={() => editTopic(topic, titleChanged)}><i className="fa fa-edit"></i></a>
      <a className = "float-right" onClick={() => deleteTopic(topic.id)}><i className="fa fa-trash"></i></a>
      
    </li>

export default PillItem;



