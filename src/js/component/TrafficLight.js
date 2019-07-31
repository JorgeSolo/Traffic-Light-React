//import react into the bundle

/*export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div>
				<div id="lightTop" />
				<div id="container">
					<div className="lights">
						<div className="redLight">red</div>
						<div className="yellowLight">Yello</div>
						<div className="greenLight">green</div>
					</div>
				</div>
			</div>
		);
	}
}*/
import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null,
			array: []
		};
	}
	render() {
		//console.log("this.setState");
		let redExtraClass = "";
		let yellowExtraClass = "";
		let greenExtraClass = "";

		if (this.state.clickedLight === "red") {
			redExtraClass = "selected";
		} else if (this.state.clickedLight === "yellow") {
			yellowExtraClass = "selected";
		} else if (this.state.clickedLight === "green") {
			greenExtraClass = "selected";
		}

		return (
			<div>
				<div id="lightTop" />
				<div id="container">
					<div
						className={"lights redLight " + redExtraClass}
						onClick={() =>
							this.setState({
								clickedLight: "red",
								array: [5]
							})
						}
					/>
					<div
						className={"yellowLight " + yellowExtraClass}
						onClick={() =>
							this.setState({
								clickedLight: "yellow"
							})
						}
					/>
					<div
						className={"greenLight " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
