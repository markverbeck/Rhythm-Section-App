import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import "./stats.css";
import Song from "./funky-Tom-background2.mp3";
import ReactHowler from 'react-howler';


class Stats extends Component {
	state = {
		firstName: "",
		lastName: "",
		stats: [],
		playStatus: true

	}
	componentDidMount() {
		API.loggedIn(true).then(res => 
			this.setState({firstName: res.data[0].firstName, lastName: res.data[0].lastName})
			).then(()=> this.loadStats()).catch(err => console.log(err));
		
	};

	loadStats = () => {
		API.searchScore(this.state.firstName, this.state.lastName)
		.then(res => this.setState({stats: res.data})).then(() => console.log(this.state.stats))
		.catch(err => console.log(err));
	};

	stopSong=()=>{
		if(this.state.playStatus === true){
			this.setState({playStatus: false});
		}else{
			this.setState({playStatus: true})

	};
};


	render(){
		
		
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
				<div id="yourStats" className="text-center col-md-12">
					<h1 title="Click to pause music" onClick={()=> this.stopSong()} id="hello">Hello {this.state.firstName} here are your stats!</h1>
				</div>
			</Row>
			<Row>
			<div className="col-md-4"></div>
			<div className="col-md-4">

			<div>{this.state.stats.map(function(stats, i){
				return (<div  key={i}>
					<div className="stats">
						<h3 className="stat"><span className="well">{i + 1}</span><span className="underline">First Name: </span>{stats.firstName}</h3>
						<h3 className="stat"><span className="underline">Last Name: </span>{stats.lastName}</h3>
						<h3 className="stat"><span className="underline">Hits: </span>{stats.hits}</h3>
						<h3 className="stat"><span className="underline">Misses: </span>{stats.misses}</h3>
						<h3 className="stat"><span className="underline">Hit Ratio: </span>{stats.hitRatio}%</h3>
					</div>
				</div>)
			})}</div>
			</div>
			<div className="col-md-4"></div>

			</Row>

			
		</Container>
		<Footer />
		</div>
		);
	};
};

export default Stats;