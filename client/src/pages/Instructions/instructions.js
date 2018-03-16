import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import Akey from "../../files/a-key.jpg";
import Dkey from "../../files/d-key.jpg";
import Anote from "../../files/aNote.png";
import Gnote from "../../files/gNote.png";
import Mkey from "../../files/m-key.jpg";
import Mute from "../../files/mute.png";
import API from "../../utils/API";
import "./instructions.css";

class Instructions extends Component {
	state = {
		loggedIn: "",
		userName: "",
		password: ""
	}

	componentDidMount() {
		API.loggedIn(true).then(res => 
			this.setState({
				loggedIn: res.data[0].loggedin, userName: res.data[0].userName, password: res.data[0].password})
			).catch(err => console.log(err));
		
	};

	render(){
		if(this.state.loggedIn === true){
		return(
		<div>
			<NavBar />
			<Container>
				<Row>
					<div className="text-center col-md-12">
						<h1 id="inst">Instructions</h1>
						<span>
							<img id="aKey" className="img-responsive keys top-row" src={Akey} /><h3 className="equal keys top-row">=</h3><img id="aNote" className="img-responsive keys top-row" src={Anote} />
						</span>

						<span className="keys">
							<img id="dKey" className="img-responsive keys" src={Dkey} /><h3 className="equal keys">=</h3><img id="gNote" className="img-responsive keys" src={Gnote} />
						</span>

						<span className="keys">
							<img id="mKey" className="img-responsive keys" src={Mkey} /><h3 className="equal keys">=</h3><img id="mute" className="img-responsive img-thumbnail keys" src={Mute} />
						</span>

							<h3 id="warning"> !Do not use bluetooth speakers!</h3>
						<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/5MtdRyyuBfM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
					</div>
				</Row>
				
			</Container>
			<Footer />
		</div>
		);
	}else{
		return(
				<div>
					<NavBar />
					<Container>
						<Row>
							<div className="text-center col-md-12">
							<h1 id="logOrSign" className="Text">Please <a href="/signup">signup</a> or <a href="/login">login</a> to continue!</h1>
							</div>
						</Row>
					</Container>
					<Footer />
				</div>
				);
		}
	};
};

export default Instructions;