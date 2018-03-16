import React, { Component } from "react";
import { Redirect } from 'react-router'
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import FunkyTom from "../../files/funkyTom.jpeg";
import Song from "./rhythm-section-background.mp3";
import ReactHowler from 'react-howler';
import "./logOut.css";
class LogOut extends Component {
	state = {
		userName: "",
		password: "",
		loggedIn: true,
		playStatus: true
	}

	componentDidMount() {
		API.loggedIn(true).then(res => 
			this.setState({userName: res.data[0].userName, password: res.data[0].password })
			).catch(err => console.log(err));
		
	};

	logOut = () =>{
  	API.logOut({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(() => this.reload())
        .catch(err => console.log(err));
        

  	};

  	stopSong=()=>{
		if(this.state.playStatus === true){
			this.setState({playStatus: false});
		}else{
			this.setState({playStatus: true})

	};
	};

  	reload = () =>{
  		this.setState({loggedIn: false});
  		}

	render(){
		
		if(this.state.loggedIn){
			
		return(
			<div>
			<ReactHowler
	          src={Song}
	          playing={this.state.playStatus}
	          loop={true}
	        />
				<NavBar />
				<Container>
					<Row>
						<div className="col-md-4">
							<img id="tom" className="img-responsive animated tada" title="Click to pause music" onClick={()=> this.stopSong()} src={FunkyTom} />
						</div>
						<div className="text-center col-md-8">
							<button id="laterOn" onClick={this.logOut} type="button" className="btn btn-danger">LaterOn.com friend!</button>
						</div>
						

					</Row>
				</Container>
				<Footer />
			</div>	
			);
		}else{
			return (<Redirect to="/login" />);
		}
	
  	};
};

export default LogOut;