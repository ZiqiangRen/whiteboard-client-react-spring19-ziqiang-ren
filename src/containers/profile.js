import React from 'react'
import {Link} from 'react-router-dom'
import UserService from '../services/UserService'
import { Redirect } from 'react-router';


class profile extends React.Component  {
	constructor(props) {
    super(props);
    this.userService = new UserService()
    this.state = {
    	online: true,
    	user: {},
    	firstname: "",
    	lastname: "",
    	updated: false,
    	role: ""
    }
  }


  componentDidMount = () =>{
    this.userService.getProfile()
              .then(user => this.setState({user: user}, ()=>console.log(user)));
    }

  componentDidUpdate =() =>
    this.userService.getProfile()
              .then(user => this.setState({user: user}));


	userLogout = () =>{
		this.userService.logout();
		this.setState({online: false});
	}



	firstChanged  = (event)=> {
	     this.setState({
	     	firstname: event.target.value
	     })

	}


	lastChanged  = (event)=> {
	     this.setState({
	     	lastname: event.target.value
	     })		
	}

	setRole = (event)=>
	{
		this.setState({
			role: event.target.value
		})
	}

	updateUser = () =>{
		this.state.user.firstname = this.state.firstname;
		this.state.user.lastname = this.state.lastname;
		this.state.user.role = this.state.role;
		this.userService.updateUser(this.state.user.id, this.state.user).then(()=>this.setState({updated: true}));
	}

	closeIt = () =>
	{
		this.setState({updated: false})
	}


render(){
	if(this.state.online === false){
            return (<Redirect to="/" />);
        }else{

return (
<div className="container">
      <h1>Profile</h1>

{        this.state.updated &&
	<div className="alert alert-success" id="buttonAlert">
          <button onClick={this.closeIt} className="close"  aria-label="Close">
            <span aria-hidden="false">&times;</span>
        </button>
          <strong>Success!</strong> You just updated your profile.
        </div>}


        <div className="form-group row">
          <label className="col-sm-2 col-form-label" for="username">UserName:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={this.state.user.username} readOnly/>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">FirstName:</label>
          <div className="col-sm-10">
            <input onChange={this.firstChanged} className="form-control" placeholder={this.state.user.firstname}/>
          </div>
        </div>


        <div className="form-group row">
          <label className="col-sm-2 col-form-label">LastName:</label>
          <div className="col-sm-10">
            <input onChange={this.lastChanged} className="form-control" placeholder={this.state.user.lastname}/>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Role:</label>
          <div className="col-sm-10">
            <select onChange={this.setRole} className="form-control" default={this.state.user.role==""? "Student": this.state.user.role}>
		        <option value="Student">Student</option>
		        <option value="Admin">Admin</option>
		        <option value="Faculty">Faculty</option>
      		</select>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <button onClick={this.updateUser} className="btn btn-primary btn-block">Update</button>
          </div>
        </div>




        <div className="form-group row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
	            <a onClick={this.userLogout} className="btn btn-info btn-block">
	          		<span className="glyphicon glyphicon-log-out"></span> Sign out
	        	</a>
          </div>
        </div>
    </div>

	)}
}
}


export default profile;