import WidgetService from "../services/WidgetService"

const widgetService = new WidgetService();

const widgets2 = [{
                    "id": 111,
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
      }]

//console.log(widgets2)

const widgets =
    {
        widgets: widgets2
}

const widgetReducer = (state=widgets, action) => {
    switch(action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        text: 'New Widget',
                        size: 1,
                        id: (new Date()).getTime(),
                        order : "1",
                        items : "input one line per row"  

                    }
                ]
            }
        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'MOVE_UP_WIDGET':
            console.log(state.widgets)
            console.log(action.widget)
            for(var i=0; i<state.widgets.length;i++){
                if(state.widgets[i].id===action.widget.id){
                    var tmp = state.widgets[i-1];
                    state.widgets[i-1] = state.widgets[i];
                    state.widgets[i] = tmp;
                    break;
                }
            }
            return {
                widgets: state.widgets.filter(widget => widget)
            }
        case 'MOVE_DOWN_WIDGET':
            for(var i=0; i<state.widgets.length;i++){
                if(state.widgets[i].id===action.widget.id){
                    var tmp = state.widgets[i+1];
                    state.widgets[i+1] = state.widgets[i];
                    state.widgets[i] = tmp;
                    break;
                }
            }
            return {
                widgets: state.widgets.filter(widget => widget)
            }
        case 'FIND_WIDGET':
            return {
                widgets: state.widgets.find(widget => widget.id === action.widget.id)
            }
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            //console.log(courseService.findWidgets(action.topicId));
            return {
                widgets: widgetService.findWidgets(action.topicId)
            }
        case 'FIND_ALL_WIDGETS':
            return {
                widgets: state.widgets.filter(widget => widget)
            }            
        default:
            return state;
    }
}

export default widgetReducer;