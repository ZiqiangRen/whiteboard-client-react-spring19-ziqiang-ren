import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class welcome extends Component {

render() {
    return (

<div>

	<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
	   <a class="navbar-brand" href="#">WhiteBoard</a>
	   <button class="navbar-toggler" type="button"
	           data-toggle="collapse" data-target="#navbarNavDropdown">
	       <span class="navbar-toggler-icon"></span>
	   </button>
	   <div class="collapse navbar-collapse" id="navbarNavDropdown">
	       <ul class="navbar-nav">
	           <li class="nav-item active">
	               <Link className="btn" to="/">Home</Link></li>
	           <li class="nav-item">
	               <Link className="btn" to="/login">Login</Link></li>
	           <li class="nav-item">
	               <Link className="btn" to="/profile">Profile</Link></li>
	       </ul>
	   </div>
	</nav>
    <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Hello, Web dev!</h1>
          <p class="lead text-muted">This is the project Home page for CS5610</p>
        </div>
      </section>
    </main>


</div>


    	)



}




}







export default welcome;