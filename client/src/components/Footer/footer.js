import React, { Component } from "react";
import API from "../../utils/API";
import Facebook from "../../files/facebook-logo.png";
import Instagram from "../../files/instagram-logo.jpg";
import Twitter from "../../files/twitter-logo.png";
import Itunes from "../../files/itunes-logo.png";
import Spotify from "../../files/spotify-logo.png";
import GooglePlay from "../../files/google-play-logo.jpg";
import { Col, Row, Container } from "../Grid";
import "./footer.css";



class Footer extends Component{
	state = {
		loggedIn: "",
		userName: "",
		password: ""
	}

	componentDidMount() {
		API.loggedIn(true).then(res => 
			this.setState({loggedIn: res.data[0].loggedin, userName: res.data[0].userName, password:res.data[0].password})
			).catch(err => console.log(err));
	};

	

	render(){
		
		if(this.state.loggedIn){
			return(
		<div id="footer" className="">
		<div className="row">
			<div className="footIcon col-md-4 footBlock block1">
			<a href="https://www.facebook.com/scotchhollow/" target="_blank"><img id="icon" className="img-responsive icon" src={Facebook}/></a>
			<a href="https://www.instagram.com/scotchhollow/" target="_blank"><img className="img-responsive icon" src={Instagram}/></a>
			<a href="https://twitter.com/scotchhollow1" target="_blank"><img className="img-responsive icon" src={Twitter}/></a>
			</div>
			<div className="footText col-md-4 text-center footBlock block2">
			<p>Rhythm Section</p>
			<a id="linkFoot" href="/">Home | </a>
			<a className="linkFoot" href="mailto: mrkverbeck@gmail.com">Contact | </a>
			<a className="linkFoot" href="/logout">Logout | </a> 
			<a className="linkFoot" href="/stats">Stats</a>
			<p>©  Mark Verbeck  All rights reserved.</p>
			</div>
			<div className="footIcon col-md-4 footBlock block3">
			<a href="https://itunes.apple.com/us/artist/scotch-hollow/736110461" target="_blank"><img id="iTunes" className="img-responsive icon" src={Itunes}/></a>
			<a href="https://open.spotify.com/artist/5QVuEnNTkvuXUPmsqccxEY" target="_blank"><img className="img-responsive icon" src={Spotify}/></a>
			<a href="https://play.google.com/store/music/artist/Scotch_Hollow?id=Ae3d3s4f4oylo2h67hhwsdp3yem" target="_blank"><img id="google" className="img-responsive icon" src={GooglePlay}/></a>
			</div>
	</div>
	</div>)
		}else{
	return(
	<div id="footer" className="">
	<div className="row">
			<div className="footIcon col-md-4 footBlock block1">
			<a href="https://www.facebook.com/scotchhollow/" target="_blank"><img id="icon" className="img-responsive icon" src={Facebook}/></a>
			<a href="https://www.instagram.com/scotchhollow/" target="_blank"><img className="img-responsive icon" src={Instagram}/></a>
			<a href="https://twitter.com/scotchhollow1" target="_blank"><img className="img-responsive icon" src={Twitter}/></a>
			</div>
			<div className="footText col-md-4 text-center footBlock block2">
			<p>Rhythm Section</p>
			<a id="linkFoot" href="/">Home | </a>
			<a className="linkFoot" href="mailto: mrkverbeck@gmail.com">Contact | </a>
			<a className="linkFoot" href="/login">Login | </a> 
			<a className="linkFoot" href="/signup">Signup</a>
			<p>©  Mark Verbeck  All rights reserved.</p>
			</div>
			<div className="footIcon col-md-4 footBlock block3">
			<a href="https://itunes.apple.com/us/artist/scotch-hollow/736110461" target="_blank"><img id="iTunes" className="img-responsive icon" src={Itunes}/></a>
			<a href="https://open.spotify.com/artist/5QVuEnNTkvuXUPmsqccxEY" target="_blank"><img className="img-responsive icon" src={Spotify}/></a>
			<a href="https://play.google.com/store/music/artist/Scotch_Hollow?id=Ae3d3s4f4oylo2h67hhwsdp3yem" target="_blank"><img className="img-responsive icon" src={GooglePlay}/></a>
			</div>
	</div>
	</div>
	
		);
	};
	
};
};

export default Footer;