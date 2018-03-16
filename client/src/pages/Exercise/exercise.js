import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import Band from "../../files/band.jpg";
import Music from "../../files/musical-notes.jpg";
import Measure from "../../files/measure.png";
import Time from "../../files/timesign.jpg";
import MusicFlower from "../../files/music-dandelion.jpg";
import WholeRest from "../../files/whole-rest.jpg";
import WholeNote from "../../files/whole_note.jpg";
import HalfRest from "../../files/half-rest.png";
import HalfNote from "../../files/half-note.jpg";
import QuarterRest from "../../files/quarter-rest.jpg";
import QuarterNote from "../../files/quarter-note.png";
import EighthRest from "../../files/8th-rest.jpg";
import EighthNote from "../../files/8th-note.png";
import Song from "./funky-Tom-background2.mp3";
import ReactHowler from 'react-howler';
import "./exercise.css";

// Main Page for various exercise to help with the game.

class Exercise extends Component {
	state = {
		playStatus: true
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
				<div id="titles" className="text-center col-md-12">
					<h1 title="Click to pause music" onClick={()=> this.stopSong()} id="rhythm" className="example">Rhythm 101</h1>
				</div>
			</Row>

			<Row>
				<div className="text-center col-md-6 divy">
					<p className="Text">The most important thing about any piece of music is the rhythm.  It is the glue that holds the notes together into something meaningful.  Without it, you would be doing nothing but making noise.  It isn’t something that comes out of any one instrument, but something that is internal to you.  Once you have rhythm, you can play almost anything.</p>
				</div>
				<div className="col-md-6">
					<img id="picOne" className="img-responsive" src={Band} />
				</div>
			</Row>
			<Row>
				<div className="col-md-6">
					<img id="picTwo" className="img-responsive" src={Music} />
				</div>
				<div id="rightText" className="text-center col-md-6 divy">
					<p  className="Text">So lets start with the basics.  Rhythm by definition is “the systematic arrangement of musical sounds, principally according to duration and periodic stress” or in other words, a repeated pattern with the same about of “time” in-between each note or group of notes.  The best way to conceptualize this, is to look at music notation itself.  </p>
				</div>
			</Row>

			<Row>
				<div className="text-center col-md-6 divy">
					<p className="Text">First we have something called a measure, or an allotted amount of musical time.  Within each measure contains a certain amount “beats” or “notes” that can be manipulated in any way we see fit.  We then combine these measures to represent the entirety of the musical composition.  For example, a song that is “12 bars” is simply referring to a piece of music that is approximately 12 measures long. </p>
				</div>
				<div className="col-md-6">
					<img id="picThree" className="img-responsive" src={Measure} />
				</div>
			</Row>

			<Row>
				<div className="col-md-6">
					<img id="picFour" className="img-responsive" src={Time} />
				</div>
				<div id="rightText2" className="text-center col-md-6 divy">
					<p className="Text rightText">We know how many beats are in a measure by something called the “Time Signature” which tells us just how many of what beat we have to use.  The most used time signature is 4/4 or “common time”, it states that we have a total of 4 quarter notes (beats) within each measure. The top number tells us how many beats are in the measure and the bottom indicates what kind of notes receives that beat.  There are many types of time signatures, all accompanied by their own feel, but we will be mostly sticking with the basics.  </p>
				</div>
			</Row>

			<Row>
				<div className="text-center col-md-6 divy">
					<p className="Text">We use “notes” and “rests” to indicate how exactly we want to divide the time within a measure with what tones to play, for what duration.   A note implies  you are supposed to make noise and a rest implies you should remain quite.  But how do we know how long we are supposed to play?  Simple, each note and rest has its own name and symbol that indicates the amount of time the required action will take.  The four basic ones we will cover is whole, half, quarter, and eighth. </p>
				</div>
				<div className="col-md-6">
					<img id="picFive" className="img-responsive" src={MusicFlower} />
				</div>
			</Row>

			<Row>
				<div className="col-md-4">
					<img id="wholeNote" className="img-responsive" src={WholeNote} />
				</div>
				<div className="divy notes Text text-center col-md-4">
					<a href="/whole"><h2 className="link">Whole Note/Rest</h2></a>
					<h3> 4 beats long.</h3>
				</div>
				<div className="col-md-4">
					<img id="wholeRest" className="img-responsive" src={WholeRest} />
				</div>
			</Row>

			<Row>
				<div className="col-md-4">
					<img id="halfNote" className="img-responsive" src={HalfNote} />
				</div>
				<div className="divy notes Text text-center col-md-4">
					<a href="/half"><h2 className="link">Half Note/Rest</h2></a>
					<h3> 2 beats long.</h3>
				</div>
				<div className="col-md-4">
					<img id="halfRest" className="img-responsive" src={HalfRest} />
				</div>
			</Row>

			<Row>
				<div className="col-md-4">
					<img id="quarterNote" className="img-responsive img-thumbnail" src={QuarterNote} />
				</div>
				<div className="divy notes Text text-center col-md-4">
					<a href="/quarter"><h2 className="link">Quarter Note/Rest</h2></a>
					<h3> 1 beats long.</h3>
				</div>
				<div className="col-md-4">
					<img id="quarterRest" className="img-responsive" src={QuarterRest} />
				</div>
			</Row>

			<Row>
				<div className="col-md-4">
					<img id="eighthNote" className="img-responsive img-thumbnail" src={EighthNote} />
				</div>
				<div className="divy Text text-center col-md-4 notes">
					<a href="eighth"><h2 className="link">8th Note/Rest</h2></a>
					<h3> 2 notes per beat.</h3>
				</div>
				<div className="col-md-4">
					<img id="eighthRest" className="img-responsive" src={EighthRest} />
				</div>
			</Row>

			<Row>
				<div id="footerText" className="Text text-center col-md-12">
					<p>One of the hardest things about learning basic rhythm, is being able conceptualize something that is basically an internal feeling.  This is exactly why music notation was invented, so a person’s intuitive sense could be represented on paper.  Even if you don’t read music regularly, understanding the notation and how it works will help you understand what you are tying to achieve.  But never forget nothing replaces hard work and a good practice routine. </p>
				</div>
			</Row>
		</Container>
		<Footer />
	</div>);
	};
};

export default Exercise;