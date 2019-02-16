import React from 'react'

const ParagraphWidget = ({widget, updateWidget, preview}) =>
<div>
{
   preview===false &&   
    <div>
    <textarea
        value={widget.text}
        onChange={event => {
            widget.text = event.target.value
            updateWidget(widget)
        }}
        placeholder="Paragraph text"
        className="form-control"/>

    <input
        placeholder="Widget name"
        className="form-control"/>

    </div>
    ||
    <p>{widget.text}</p>
}    
<hr/>
</div>


export default ParagraphWidget;