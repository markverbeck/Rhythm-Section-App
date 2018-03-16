import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";

class OnOff extends Component{
	render(){
		return(
			<div>
				<NavBar />
				<Container>
					<Row>
						<div className="text-center col-md-12">
							<div className="example">
								<h1 id="onOff">On And Off The Beat</h1>
								<p className="exampDescrip">This is an example of playing on the downbeat (on the beat) and the upbeat (off the beat).</p>
							</div>
							<iframe src="https://flat.io/embed/5a9342cb4bd49b728735ef76?layout=responsive&audioSource=&videoPosition=" height="450" width="100%" frameBorder="2" allowFullScreen></iframe>
							<h1 className="example">Exercise coming soon!</h1>
						</div>
					</Row>
				</Container>
				<Footer />
			</div>
			);
	}
}

export default OnOff;