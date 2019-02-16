import React from 'react'


const ListWidget = ({widget, updateWidget, preview}) =>
<div>
{
   preview===false &&   
    <div>
        <select
            onChange={event => {
                widget.order = event.target.value
                updateWidget(widget)
            }}
            className="form-control">
            <option value="1">Unordered list</option>
            <option value="2">Ordered list</option>
        </select>

        <textarea
            value={widget.items.split(" ").join("\n")}
            onChange={event => {
            //tmp = event.target.value.split("\n")
            widget.items = event.target.value.split("\n").join(" ")
            updateWidget(widget)
            }}
            placeholder="Enter one list item per line"
            className="form-control"/>

        <input
                placeholder="Widget name"
                className="form-control"/>
    </div>
    ||
    
        (widget.order === "1" &&  <ul>{widget.items.split(" ").map((line) => <li>{line}</li>)}</ul>) ||
        (widget.order === "2" &&  <ol>{widget.items.split(" ").map((line) => <li>{line}</li>)}</ol>) 
    
}
<hr/>
</div>

export default ListWidget;




