import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";


class Half extends Component {
	render(){
		return(
		<div>
			<NavBar />	
			<Container>
				<Row>
					<div className="text-center col-md-12">
						<h1 className="example">Half Note/Rest Example</h1>
						<iframe src="https://flat.io/embed/5a93374254bdbe4aeb0b54ab?layout=responsive&audioSource=&videoPosition=" height="450" width="100%" frameBorder="2" allowfullscreen></iframe>
						<h1 className="example">Exercise coming soon!</h1>
					</div>
				</Row>
			</Container>
			<Footer />
		</div>
		);
	};
};

export default Half;