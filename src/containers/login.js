import React from 'react'
import {Link} from 'react-router-dom'
import UserService from '../services/UserService'


class login extends React.Component  {
	constructor(props) {
    super(props);
    this.userService = new UserService()
    this.state = {
    	username: "",
    	password: ""
    }
  }



	userLogin = () =>{
		this.userService.login(this.state)
		.then( (user) => this.check(user));

	}

	check = (user) => {
				if(user.id==-1){
					alert("Username or password is wrong!");
				}else{
					console.log(user);
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



render(){

return (

  <div className="container-fluid">
	 <h1>Sign In</h1>
	 <form>
	   <div className="form-group row">
	     <label for="username" className="col-sm-2 col-form-label">
	       Username </label>
	     <div className="col-sm-10">
	       <input className="form-control"
	                     onChange={this.nameChanged}
	                     placeholder="Alice"/>
	     </div>
	   </div>
	   <div className="form-group row">
	     <label for="password" className="col-sm-2 col-form-label">
	       Password </label>
	     <div className="col-sm-10">
	       <input type="password" className="form-control wbdv-password-fld"
	              onChange={this.pinChanged} placeholder="123qwe#$%"/>
	     </div>
	   </div>
	   
	   <div className="form-group row">     
	   	  <label className="col-sm-2 col-form-label"></label>   
	      <div className="col-sm-10">
	        <div className="checkbox">
	          <label><input type="checkbox" name="remember"/> Remember me</label>
	        </div>
	      </div>
	    </div>
	    
	   <div className="form-group row">
	     <label className="col-sm-2 col-form-label"></label>
	     <div className="col-sm-10">
	     <a onClick ={this.userLogin}    className="btn btn-primary btn-block">Sign in</a>
	       <div className="row">
	         <div className="col-6">
	           <a href="./">Forgot Password?</a>
	         </div>
	         <div className="col-6">
	         	<Link className="btn float-right" to="/register">Sign up</Link>
	         </div>
	       </div>
	     </div>
	   </div>
	   </form>
	</div>
)
}

}
export default login;