
import React, {Component} from 'react';

class Property extends Component {
	render() {
		return(
			<div className="tile">
				<div className="imageContainer">
					<img src='/images/tile1.jpg' title={this.props.featureProperty.category} />
					<span>${this.props.featureProperty.price}</span>
					<div className="googleMap"></div>
				</div>
				<div className="otherInfo">
					<p className="category">{this.props.featureProperty.category}</p>
					<div>
						<p className="address">{this.props.featureProperty.number} {this.props.featureProperty.street} {this.props.featureProperty.suburb} {this.props.featureProperty.postcode} {this.props.featureProperty.state}</p>
						<div className="area">
							<span className="hector">{this.props.featureProperty.hector}H</span>
							<span>{this.props.featureProperty.acres}AC</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Property;