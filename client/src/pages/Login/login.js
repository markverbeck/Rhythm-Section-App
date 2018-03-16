import React, { Component } from "react";
import { Redirect } from 'react-router'
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import logOutButton from "../../files/logout-button-purple.png";
import "./login.css";


class Login extends Component {
	state={
		userName: "",
		password: "",
		loggedIn: "",
		logUser: "",
		logPass: "",
		incorrect: "",
		
		
	};

	componentDidMount() {
		API.loggedIn(true).then(res => 
			this.setState({userName: res.data[0].userName, password: res.data[0].password, loggedIn: res.data[0].loggedin})
			).catch(err => console.log(err));
	}

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    };

    handleFormSubmit = event => {
    event.preventDefault();
    let noMatch;
    if (this.state.userName && this.state.password) {
      API.logIn({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(res => {
        	if(!res.data){
        		this.setState({userName: "", password: ""})


        		return;
        	}
        	this.setState({logUser: res.data.userName, logPass: res.data.password})
        })
        .then(() => this.correctUser())
        .catch(err => console.log(err));
        
        
    	}
	};

	


  	correctUser = () =>{
  		
  		if(this.isValidUser()){
  			
  			this.setState({loggedIn: true});
  		}else{
  			this.setState({incorrect: "Incorrect username and password!"});
  		}
  	};

  	isValidUser = () => {
  		return this.state.logUser.length > 0 &&
  			this.state.userName.length > 0 && 
  			this.state.logPass.length > 0 &&
  			this.state.password.length > 0 &&
  			this.state.logUser === this.state.userName &&
  			this.state.logPass === this.state.password;

  	}

	render(){
		if(this.state.loggedIn === true){
			return(
				<Redirect to='/game'/>
				);
		}else{

		return(
		<div>
		
		<NavBar />
		<Container>
			<Row>
				<div className="text-center col-md-12">
					<h1 className="example">Login Page</h1>
					<p>{this.state.incorrect}</p>
					<form>
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
		                <FormBtn className="button"
			                disabled={!(this.state.userName && this.state.password)}
			                onClick={this.handleFormSubmit}
			              >Login</FormBtn>
			            
					</form>
				</div>
			</Row>
		</Container>
		<Footer />
		</div>
		);
	};
};
};

export default Login;