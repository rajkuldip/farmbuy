
import React, {Component} from 'react';
import $ from 'jquery';
import Property from './Property.jsx';

class Carousel extends Component {
	componentDidMount() {
	    $('.featuredProperties').slick();
	}
	componentWillUpdate() {
		$('.featuredProperties').slick('unslick');
	}
	componentDidUpdate() {
	    $('.featuredProperties').slick();
	}
	render() {
		if (!this.props.property) {
            return null;
        }
		return(
			<div className="carousel">
				<div className="container">
					<div className="featurePropertyContent">
						<h3> Featured Properties </h3>
						<div className="featuredProperties">
						{
							this.props.property.map((propertyTile) => {
								return <Property featureProperty={propertyTile} />;
							})
						}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Carousel;