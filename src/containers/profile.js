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
    	lastname: ""
    }
  }


  componentDidMount = () =>{
    this.userService.getProfile()
              //.then(user => this.setState({user: user}, ()=>console.log(user)));

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


render(){
	if(this.state.online === false){
            return (<Redirect to="/" />);
        }else{

return (
<div className="container">
      <h1>Profile</h1>
      <form>

        <div className="alert alert-success" id="buttonAlert">
          <button type="button" id="re" class="close"  aria-label="Close">
            <span aria-hidden="false">&times;</span>
        </button>
          <strong>Success!</strong> You just updated your profile.
        </div>


        <div className="form-group row">
          <label className="col-sm-2 col-form-label" for="username">UserName:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" val={this.state.user.username} readonly/>
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
            <select className="form-control" val={this.state.user.role}>
		        <option val="Student">Student</option>
		        <option val="Admin">Admin</option>
		        <option val="Faculty">Faculty</option>
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



      </form>
    </div>

	)}
}
}


export default profile;