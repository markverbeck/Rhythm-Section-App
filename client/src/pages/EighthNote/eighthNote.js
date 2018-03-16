import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";


class Eighth extends Component {
	render(){
		return(
		<div>
			<NavBar />	
			<Container>
				<Row>
					<div className="text-center col-md-12">
						<h1 className="example">Eighth Note/Rest Example</h1>
						<iframe src="https://flat.io/embed/5a933a676d949e0b30d30a2e?layout=responsive&audioSource=&videoPosition=" height="450" width="100%" frameBorder="0" allowFullScreen></iframe>
						<h1 className="example">Exercise coming soon!</h1>
					</div>
				</Row>
			</Container>
			<Footer />
		</div>
		);
	};
};

export default Eighth;