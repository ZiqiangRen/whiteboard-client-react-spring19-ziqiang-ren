import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = (state) =>{
 return {
    widgets: state.widgets
}}

const dispatchToPropertyMapper = dispatch => ({
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    addWidget: () =>
        dispatch({
            type: 'CREATE_WIDGET'
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
    findWidget: widget =>
        dispatch({
            type: 'FIND_WIDGET',
            widget: widget
        }),
    moveUpWidget: widget =>
        dispatch({
            type: 'MOVE_UP_WIDGET',
            widget: widget
        }),
    moveDownWidget: widget =>
        dispatch({
            type: 'MOVE_DOWN_WIDGET',
            widget: widget
        }),
    findAllWidgetsForTopic: action =>
        dispatch({
            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
            action: action.topicId
        }),
})

const WidgetListContainer = connect(stateToPropertyMapper,dispatchToPropertyMapper)(WidgetList)

export default WidgetListContainer