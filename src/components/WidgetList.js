import React,{Component} from 'react'
import WidgetComponent from './WidgetComponent'
import Switch from 'react-toggle-switch';
import {render} from 'react-dom';
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css" 





//const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, moveUpWidget, moveDownWidget}) =>



class WidgetList extends Component {
    constructor(props) {
    super(props);
    this.state = {
        widgets: this.props.widgets,
      switched: false
    };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({widgets: nextProps.widgets});
  }

    toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
    };
    
    save = () => {
        alert('Saved!');
    }
    render(){
        return(
            <div>
                <div className="row">
                    <h3 className="text-success col-8">Widget List: {this.props.widgets.length}</h3>
                    <button onClick={this.save}
                            className="btn btn-success float-right">SAVE</button>
                    <h3>Preview</h3>
                    <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
                </div>
                <hr/>
                <div className="list-group">
                {
                    this.state.widgets.map((widget, index) =>
                        <WidgetComponent
                            key={widget.id}
                            updateWidget={this.props.updateWidget}
                            deleteWidget={this.props.deleteWidget}
                            moveUpWidget={this.props.moveUpWidget}
                            moveDownWidget={this.props.moveDownWidget}
                            widget={widget}
                            index={index}
                            length={this.props.widgets.length}
                            preview={this.state.switched}/>
                    )
                }
                <button
                    onClick={this.props.addWidget}
                    className="btn btn-success">
                    <i className="fa fa-plus"></i>
                </button>
                </div>
            </div>
        );
    }

}    

export default WidgetList;
