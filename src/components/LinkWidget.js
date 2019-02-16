import React from 'react'

const LinkWidget = ({widget, updateWidget, preview}) =>
    <div>
    {
       preview===false &&   
        <div>
        <input
            value={widget.href}
            onChange={event => {
                widget.href = event.target.value
                updateWidget(widget)
            }}
            placeholder="Link URL"
            className="form-control"/>
        <input
            value={widget.title}
            onChange={event => {
                widget.title = event.target.value
                updateWidget(widget)
            }}
            placeholder="Link text"
            className="form-control"/>

        <input
            placeholder="Widget name"
            className="form-control"/>
        </div>
    ||
        <a href={widget.href}>{widget.title}</a>
    }
    <hr/>
    </div>


export default LinkWidget;