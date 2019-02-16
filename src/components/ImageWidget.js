import React from 'react'

const ImageWidget = ({widget, updateWidget, preview}) =>
<div>
{
   preview===false &&   
    <div>
        <input
            value={widget.src}
            onChange={event => {
                widget.src = event.target.value
                updateWidget(widget)
            }}
            placeholder="input your image url here"
            className="form-control col-8"/>
        <input
            placeholder="Widget name"
            className="form-control col-8"/>
    </div>
    ||
        <img src={widget.src} alt="Your Image"/>
}    
<hr/>
</div>


export default ImageWidget;




 