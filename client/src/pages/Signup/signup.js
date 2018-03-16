import React, { Component } from "react";
import NavBar from "../../components/NavBar"
import { Redirect } from 'react-router';
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import logOutButton from "../../files/logout-button-purple.png";




class Signup extends Component {
	state={
		firstName: "",
		lastName: "",
		userName: "",
		password: "",
		loggedIn: false,
		
	};
	

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    };

    handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.userName && this.state.password) {
      API.signUp({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        password: this.state.password
      })
        .then(res => console.log("Thank you for signing up!"))
        .then(() => this.reload())
        .catch(err => console.log(err));

        this.setState({firstName: "", lastName: "", userName: "", password: ""});
    }

    
  };

  reload = () => {
  	this.setState({loggedIn:true});
  };

  
  

  
	render(){
		
		if(!this.state.loggedIn){
		return(
		<div>
		
		<NavBar />
		<Container>
			<Row>
				<div className="text-center col-md-12">
					<h1 className="example">Signup Page</h1>
					<form>
						<p className="formTitles text-left">First Name:</p>
						<Input
		                  value={this.state.firstName}
		                  onChange={this.handleInputChange}
		                  name="firstName"
		                  placeholder="required"
		                />
		                <p className="formTitles text-left">Last Name:</p>
		                <Input
		                  value={this.state.lastName}
		                  onChange={this.handleInputChange}
		                  name="lastName"
		                  placeholder="required"
		                />
		                <p className="formTitles text-left">User Name:</p>
		                <Input
		                  value={this.state.userName}
		                  onChange={this.handleInputChange}
		                  name="userName"
		                  placeholder="required"
		                />
		                <p className="formTitles text-left">Password:</p>
		                <Input
		                  value={this.state.password}
		                  onChange={this.handleInputChange}
		                  name="password"
		                  placeholder="required"
		                />
		                <FormBtn
			                disabled={!(this.state.firstName && this.state.lastName && this.state.userName && this.state.password)}
			                onClick={this.handleFormSubmit}
			              >
			                Sign Up
			              </FormBtn>
					</form>
					  
				</div>
			</Row>
			
			
		</Container>
		<Footer />
		</div>);
	}else{
		return(<Redirect to="/game" />);
	}
	
};
};

export default Signup;