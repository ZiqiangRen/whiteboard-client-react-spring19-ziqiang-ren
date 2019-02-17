import React from 'react'
import {Link} from 'react-router-dom'
import UserService from '../services/UserService'
import { Redirect } from 'react-router';


class register extends React.Component {
	constructor(props) {
    super(props);
    this.userService = new UserService()
    this.state = {
    	username: "",
    	password: "",
    	p2: "",
    	online: false
    }
  }



	register = () =>{
		this.state.password === this.state.p2? this.userService.register({username: this.state.username, password: this.state.password})
		.then( 
			(user) => this.check(user)
			): alert("Please check your password!")
	}


	check = (user) => {
				if(user.id==-1){
					alert("Username exists!");
				}else{
					console.log(user);
					this.setState({
						online: true
					});
					
				}}

	nameChanged  = (event)=> {
	     this.setState({
	     	username: event.target.value
	     })

	}


	pinChanged  = (event)=> {
	     this.setState({
	     	password: event.target.value
	     })		
	}

	pin2Changed  = (event)=> {
	     this.setState({
	     	p2: event.target.value
	     })		
	}


render(){
if(this.state.online==true){
	return (<Redirect to="/table" />);
}

return (


<div className="container-fluid">
	<h1>Register</h1>
	<form>
	   <div className="form-group row">
	     <label htmlFor="username" className="col-sm-2 col-form-label">
	       Username </label>
	     <div className="col-sm-10">
	       <input className="form-control" onChange={this.nameChanged}/>
	     </div>
	   </div>
   
	   <div className="form-group row">
	     <label className="password" className="col-sm-2 col-form-label">
	       Password </label>
	     <div className="col-sm-10">
	       <input type="password" className="form-control wbdv-password-fld"
	              onChange={this.pinChanged}/>
	     </div>
	   </div>

	   <div className="form-group row">
	     <label for="password" className="col-sm-2 col-form-label">
	       Verify Password: </label>
	     <div className="col-sm-10">
	       <input type="password" className="form-control wbdv-password-fld"
	              onChange={this.pin2Changed}/>
	     </div>
	   </div>
	   
	   <div className="form-group row">
	     <label className="col-sm-2 col-form-label"></label>
		     <div className="col-sm-10">
		     <a onClick={this.register} className="btn btn-primary btn-block">Sign up</a>
			   <div className="row">
				       <div className="col-6">
				       		<Link className="btn btn-primary" to="/">Cancel</Link>
				       </div>
				      <div className="col-6">
				      	<Link className="btn btn-primary" to="/login">Sign in</Link>
			         </div>
			   </div>
			</div>
   	   </div>   	   
   
		
	</form>	
</div>
)
}
}

export default register;