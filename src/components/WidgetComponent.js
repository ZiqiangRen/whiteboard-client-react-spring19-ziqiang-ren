import React from 'react'


import LinkWidget from './LinkWidget'
import ListWidget from './ListWidget'
import ParagraphWidget from './ParagraphWidget'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'

/*console.log(LinkWidget)
console.log(ListWidget)
console.log(ParagraphWidget)
console.log(HeadingWidget)
console.log(ImageWidget)*/

const WidgetComponent = ({widget, deleteWidget, updateWidget, moveUpWidget, moveDownWidget, index, length, preview}) =>
    <div>
        {
            preview===false && 
                <div className="form-group row">
                    <h3 className="text-success col-4">{widget.type} Widget </h3>
                    <select
                        onChange={(event) => {
                            widget.type = event.target.value
                            updateWidget(widget)
                        }}
                        className="form-control col-4" value={widget.type}>
                        <option value="HEADING">Heading</option>
                        <option value="IMAGE">Image</option>
                        <option value="LINK">Link</option>
                        <option value="LIST">List</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>
                    <div className="col-4 float-right">
                        {
                            index.toString()!=="0" &&
                            <button className="btn btn-warning" 
                                    onClick={() => moveUpWidget(widget)}>
                                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                            </button>
                        }
            
            
                        {   index.toString()!==(length-1).toString() &&
                            <button className="btn btn-warning" 
                                    onClick={() => moveDownWidget(widget)}>
                                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                            </button>
                        }
            
                        <button className="btn btn-danger" 
                            onClick={() => deleteWidget(widget)}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
        }
        {
            (widget.type==='HEADING' &&
                             <HeadingWidget
                                 widget={widget}
                                 updateWidget={updateWidget}
                                 preview={preview}/>) ||
            (widget.type==='IMAGE'   && 
                             <ImageWidget   
                                 widget={widget}
                                 updateWidget={updateWidget}
                                 preview={preview}/>) ||
            (widget.type==='LIST'    && 
                             <ListWidget   
                                 widget={widget}
                                 updateWidget={updateWidget}
                                 preview={preview}/>) ||
            (widget.type==='LINK'    && 
                             <LinkWidget   
                                 widget={widget}
                                 updateWidget={updateWidget}
                                 preview={preview}/>) ||
            (widget.type==='PARAGRAPH'    && 
                             <ParagraphWidget   
                                 widget={widget}
                                 updateWidget={updateWidget}
                                 preview={preview}/>)     
           
        }
        
    </div>

export default WidgetComponent;