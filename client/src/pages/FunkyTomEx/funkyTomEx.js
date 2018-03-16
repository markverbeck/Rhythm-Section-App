import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";

class FunkyTomEx extends Component{
	render(){
		return(
			<div>
				<NavBar />
				<Container>
					<Row>
						<div className="text-center col-md-12">
							<div className="example">
								<h1 id="FTE">Funky Tom Example</h1>
								<p className="exampDescrip">Use this exercise to help complete the Funky Tom challenge!</p>
							</div>
							<iframe src="https://flat.io/embed/5a934894f884802a89fc8fff?layout=responsive&audioSource=&videoPosition=" height="450" width="100%" frameBorder="2" allowFullScreen></iframe>
							<h1 className="example">Exercise coming soon!</h1>
						</div>
					</Row>
				</Container>
				<Footer />
			</div>
			);
	}
}

export default FunkyTomEx;