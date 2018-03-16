import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import "./Home.css";
import { Input, TextArea, FormBtn } from "../../components/Form";
import FunkyTom from "../../files/funkyTom.jpeg";
import Footer from "../../components/Footer";
import ReactHowler from 'react-howler';
import Song from "./rhythm-section-background.mp3";
import LogIn from "../../pages/Signup";



class Home extends Component{
	state ={
		playStatus: true,
		
	}
	

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
				<div className="col-md-4">
					<img title="Click to pause music" id="funkyTom" className="img-responsive animated tada" onClick={()=> this.stopSong()} src={FunkyTom} />

				</div>
				<div id="headDiv" className="text-center col-md-8">
					<h1 id="heading">Welcome to Rhythm Section</h1>

				</div>
			</Row>
			<Row>
				<div id="paragraph" className="col-md-12">
					<p  className="text-center homeText">
					Rhythm Section is an interactive web application that is designed to help you learn and improve your sense of rhythm.
                    How to play with correct timing is one of the hardest lessons while pursing a musical instrument.  It can be extremely frustrating to learn while trying to grapple with the fundamentals of your instrument; it can often deter a person from pursuing any sort of musical journey at all. 
					</p>
					<br/>
					<p>Now with our interactive framework, you can train your sense of rhythm with our exercises and original musical compositions by tapping your keyboard along with the beat.  Unlike other music gaming platforms, you will not be relying on hand-eye coordination to virtually play along, you will have to read actual music notation and play with the correct timing.  Our program will know if your timing is on or off and award your with a “hit” or a “miss” giving you a ratio between the two numbers.  The better your ratio, the better your rhythm, and the better the music sounds!  The more you complete, the better you get.  The better you get, the faster you can excel at your instrument. </p>
					<p className="text-center homeText">Click above to get started!!</p>
					
				</div>
			</Row>
		</Container>
		<Footer />
		</div>
		);
};
};

export default Home;