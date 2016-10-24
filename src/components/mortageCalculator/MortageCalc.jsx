
import React, {Component} from 'react';

class MortageCalc extends Component {
	render() {
		return(
			<div className="farmClac">
				<img src="/images/mortage-bg.jpg" title='Mortage Calculator' />
				<p> Supported by Robobank </p>
				<div className = "calc">
					<span className="percentage">4.9%</span>
					<h3>Farm Loan Calculator </h3>
					<p>Lorem ipsum dolor sit fees, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					<a href="#" alt="Get Started">Get Started</a>
				</div>
			</div>
		);
	}
}

export default MortageCalc;