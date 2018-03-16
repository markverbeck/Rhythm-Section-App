import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import WholeRest from "../../files/whole-rest.jpg";
import WholeNote from "../../files/whole_note.jpg";
import "./wholeNote.css";


class Whole extends Component {
	render(){
		return(
		<div>
			<NavBar />	
			<Container>
				<Row>
					<div className="text-center col-md-12">
						<h1 className="example">Whole Note/Rest Example</h1>
						<iframe src="https://flat.io/embed/5a9334e66d949e0b30d30962?layout=responsive&audioSource=&videoPosition=" height="450" width="100%" frameBorder="2" allowFullScreen></iframe>
						<h1 className="example">Exercise coming soon!</h1>
					</div>
				</Row>


			</Container>
			<Footer />
		</div>
		);
	};
};

export default Whole;