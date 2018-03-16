import React, { Component } from "react";
import API from "../../utils/API";
import ReactHowler from 'react-howler';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Col, Row, Container } from "../../components/Grid";
import Notes from "../../files/keys-buttons.png";
import FunkyTom from "../../files/funkyTom.jpeg";
import FunkyTomScore from "../../files/Funky-Tom.png";
import "./game.css";
import Song from "./Funky-Tom-no-bass.mp3";
import A from "./A-note.mp3";
import G from "./G-note.mp3";



class Game extends Component {
	state = {
		firstName: "",
		lastName: "",
		loggedIn: "",
		userName: "",
		playStatus: false,
		aStatus: false,
		gStatus: false,
		seek: "",
		volume: 1.0,
		time: 0,
		points: 0,
		misses: 0,
		aKeyPressed: false,
		dKeyPressed: false,
		interval: "",
		interval2: "",
		interval3: "",
		beat: 1,
		measure:1,
		hitRatio: "",
		text:"",
		hitClass: "pointText text-center",
		missClass: "pointText text-center",
		missedClass: "pointText text-center"
		
		
	}

	componentDidMount() {
		API.loggedIn(true).then(res => 
			this.setState({loggedIn: res.data[0].loggedin, firstName: res.data[0].firstName, lastName: res.data[0].lastName, userName: res.data[0].userName})
			).catch(err => console.log(err));
		
	};

	startGame = () =>{
		this.setState({playStatus: true});
		
		this.setState({interval: setInterval(this.increment, 100)});
		this.setState({interval2: setInterval(this.incrementBeat, 645.2)});
		this.setState({interval3: setInterval(this.incrementMeasure, 2580.8)})
		console.log(this.state.lastName);	
		this.setState({points: 0, misses: 0, hitRatio: ""});
	};

	pointUp = () => {
		this.setState({points: this.state.points + 1})
	};

	missed = () => {
		this.setState({misses: this.state.misses + 1})
	};

	increment = () => {
		this.setState({time: this.state.time + 1});
		this.missedNote(this.state.time);
		this.gMissedNote(this.state.time);
		console.log(this.state.time);
	};

	incrementBeat = () => {
		this.setState({beat: this.state.beat + 1});
		if(this.state.beat === 5){
			this.setState({beat: 1});
		};
		
	};

	incrementMeasure = () => {
		this.setState({measure: this.state.measure + 1});
		if(this.state.measure === 45){
			this.hitRatio();
			clearInterval(this.state.interval);
			clearInterval(this.state.interval2);
			clearInterval(this.state.interval3);
			this.setState({text: `Hits: ${this.state.points} |  Misses: ${this.state.misses} |  Hit Ratio: ${this.state.hitRatio} %`});
			this.submitScore();
			this.setState({time: 0, beat: 1, measure: 1,});
		}
	};
	hitRatio = () => {
		const total = this.state.points + this.state.misses;
		const hitRatios = this.state.points / total;
		const winString = hitRatios.toString();
		const winPercent = winString[2] + winString[3];
		this.setState({hitRatio: winPercent});
	};

	submitScore = () => {
		API.save({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			hits: this.state.points,
			misses: this.state.misses,
			hitRatio: this.state.hitRatio
		}).then(()=> console.log("Score Saved!")).catch(err => console.log(err));
	};

	pointCheckA = a => {
		switch(a){
			case 102:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				this.setState({missClass: "pointText text-center"});
				break;
			case 103:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				this.setState({missClass: "pointText text-center"});
				break;
			case 104:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				this.setState({missClass: "pointText text-center"});a
				break;
			// Each group of three represents one available point.

			case 128:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 129:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 130:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			
			case 154:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 155:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 156:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			
			case 180:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})

				break;
			case 181:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 182:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			
			case 205:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 206:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 207:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 231:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 232:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 233:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 257:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 258:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 259:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 266:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 267:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 268:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 282:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 283:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 284:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 292:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 293:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 294:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 308:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 309:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 310:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 318:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 319:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 320:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 334:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 335:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 336:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 344:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 345:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 346:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 360:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 361:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 362:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 369:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 370:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 371:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 386:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 387:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 388:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 395:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 396:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 397:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 411:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 412:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 413:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 421:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 422:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 423:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 437:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 438:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 439:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 447:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 448:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 449:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 463:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 464:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 465:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 473:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 474:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 475:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 489:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 490:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 491:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 499:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 500:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 501:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 515:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 516:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 517:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 524:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 525:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 526:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 540:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 541:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 542:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 550:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 551:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 552:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 566:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 567:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 568:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 576:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 577:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 578:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 592:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 593:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 594:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 602:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 603:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 604:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;


			case 618:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 619:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 620:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 628:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 629:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 630:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 644:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 645:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 646:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 653:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 654:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 655:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 670:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 671:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 672:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 679:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 680:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 681:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 695:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 696:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 697:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 705:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 706:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 707:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 721:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 722:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 723:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 731:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 732:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 733:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 747:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 748:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 749:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 757:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 758:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 759:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 773:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 774:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 775:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 782:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 783:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 784:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 799:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 800:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 801:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 808:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 809:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 810:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 824:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 825:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 826:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 834:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 835:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 836:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 850:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 851:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 852:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 860:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 861:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 862:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 876:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 877:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 878:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 886:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 887:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 888:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 902:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 903:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 904:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 911:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 912:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 913:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 928:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 929:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 930:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 937:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 938:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 939:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 953:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 954:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 955:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 963:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 964:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 965:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 979:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 980:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 981:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 989:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 990:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 991:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1005:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1006:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1007:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1015:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1016:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1017:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1031:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1032:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1033:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1040:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1041:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1042:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1057:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1058:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1059:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1066:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1067:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1068:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1082:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1083:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1084:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1092:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1093:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1094:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1108:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1109:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1110:
				this.pointUp();
				this.setState({aKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
				default:
				this.setState({missClass: "pointText text-center red"});
					if(this.state.aStatus === true){
						if(this.state.aKeyPressed === false){
							this.missed();
							
						};
						this.setState({aKeyPressed: false});
					};
				break;

			};
	};

	pointCheckD = a =>{
		switch(a){
			case 280:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 281:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 282:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 331:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 332:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 333:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 382:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 383:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 384:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 434:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 435:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 436:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 663:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 664:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 665:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
		        break;

			case 692:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 693:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 694:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 744:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 745:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 746:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 795:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 796:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 797:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 847:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 848:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 849:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 899:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 900:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 901:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 950:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 951:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 952:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1002:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1003:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1004:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1053:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1054:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1055:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;

			case 1118:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1119:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			case 1120:
				this.pointUp();
				this.setState({dKeyPressed: true});
				this.setState({hitClass:"pointText text-center green"})
				break;
			default:
				this.setState({missClass: "pointText text-center red"});
				if (this.state.gStatus === true){
					if(this.state.dKeyPressed === false){
						this.missed();
						
					}
						this.setState({dKeyPressed: false});	
					}

		}
	};

	missedNote = a =>{
		switch(a){
			case 104:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 130:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 155:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 181:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});				
				};
			break;

			case 207:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 232:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 259:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 268:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;


			case 284:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 294:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 310:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 320:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 336:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 346:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;


			case 371:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;


			case 388:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 398:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 413:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 423:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;


			case 439:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 449:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 465:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 475:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 491:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 501:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 517:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 526:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 542:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 552:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 568:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 578:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 594:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 604:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 620:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 630:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 646:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 655:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			

			case 672:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 681:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			

			case 696:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 708:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 723:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 733:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;


			case 749:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 759:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 775:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 784:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			

			case 801:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 810:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 826:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 836:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			

			case 852:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 861:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 878:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 888:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			

			case 904:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 914:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 930:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 939:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			

			case 955:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 965:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 981:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 991:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;


			case 1007:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1017:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1033:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1042:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			

			case 1059:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1068:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1084:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1094:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1110:
			if(this.state.aKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;
			default:
			this.setState({missClass: "pointText text-center"});
			break;

			




		}
	};

	gMissedNote = a => {
		switch(a){
			case 281:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 334:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 384:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 436:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 665:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 694:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 746:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 797:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 849:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 901:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 952:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1004:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1055:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;

			case 1120:
			if(this.state.dKeyPressed === false){
					this.missed();
					this.setState({missClass: "pointText text-center red"});
				};
			break;



		}
	}

	keyDown = document.onkeypress = event => {
    const letter = event.key;
    
    if(letter === "a"){
    	
      this.setState({aStatus: false, seek: 0, volume: 0});
      this.setState({aStatus: true, seek:"", volume: 1.0});
      this.setState({gStatus: false, seek: "" , volume: 0});
      this.pointCheckA(this.state.time);
      
     
    }else if(letter === "d"){
    	this.setState({gStatus: false, seek: 0, volume: 0});
    	this.setState({gStatus: true, seek:"", volume: 1.0});
    	this.setState({aStatus: false, seek: "" , volume: 0});
    	this.pointCheckD(this.state.time);
    }

     if(letter === "m"){
     	this.setState({dKeyPressed: false});	
     	this.setState({aKeyPressed: false});
     	this.setState({aStatus: false, seek: 0, volume: 0});
        this.setState({gStatus: false, seek: 0, volume: 0});
    }
  };

	keyUp = document.onkeyup = event =>{
		this.setState({hitClass:"pointText text-center"});
		this.setState({missClass: "pointText text-center"});
	}

  

  

 
	render(){
		
		

		if(this.state.loggedIn === true){
		return(
		<div>
			<ReactHowler
	          src={Song}
	          playing={this.state.playStatus}
	          loop={false}
	          
	        />
	      	
	      	<ReactHowler
	      	  id="A"
	          src={A}
	          playing={this.state.aStatus}
	          ref={ref => this.player = ref}
	          seek={this.state.seek}
	         
	        />

	      	<ReactHowler
	          src={G}
	          playing={this.state.gStatus}
	          ref={(ref) => (this.player = ref)}
	          seek={this.state.seek}
	          
	        />
			<NavBar />
			<Container>
				
				

				<Row>
					
					<div className="col-md-4">
					  
						<img id="tomPic" className="img-responsive animated tada" src={FunkyTom} />
						<h1  id="tomTitle">Funky Tom</h1>

						<div id="pointList">
							<button onClick={this.startGame} type="button" className="btn btn-default butt text-center">Start</button>
						      <h3 className={this.state.hitClass} >Hits: {this.state.points}</h3>
						      <h3 className={this.state.missClass}>Misses: {this.state.misses}</h3>
						      <h3 className="pointText text-center">Beats: {this.state.beat}</h3>
						      <h3 className="pointText text-center">Measure: {this.state.measure}</h3>
						      
						    
					    </div>
					</div>
					<div className="text-center col-md-8">
						<h3 id="scores">{this.state.text}</h3>
						<img className="img-responsive" id="score" src={FunkyTomScore} />
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

export default Game;