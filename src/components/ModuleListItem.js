import React from 'react'

const ModuleListItem = ({module, selectModule, editModule, deleteModule, titleChanged, index, selectedModuleIndex}) =>
    <li className={index === selectedModuleIndex? "list-group-item active":"list-group-item"}>
      <a onClick={() => selectModule(index)}>{module.title}</a>
      <a className = "float-right" onClick={() => editModule(module, titleChanged)}><i className="fa fa-edit"></i></a>
      <a className = "float-right" onClick={() => deleteModule(module.id)}><i className="fa fa-trash"></i></a>
    </li>

export default ModuleListItem;

