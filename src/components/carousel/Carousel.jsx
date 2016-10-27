
import React, {Component} from 'react';
import $ from 'jquery';
import Property from './Property.jsx';

class Carousel extends Component {
	componentDidMount() {
		let settings = {
	    	dots: false,
	  		infinite: true,
	  		speed: 300,
	  		slidesToShow: 3,
	  		slidesToScroll: 3,
	  		nextArrow: '<i class="fa fa-chevron-right"></i>',
  			prevArrow: '<i class="fa fa-chevron-left"></i>',
	  		responsive: [{
	      		breakpoint: 1024,
	      		settings: {
	        		slidesToShow: 3,
	        		slidesToScroll: 1,
	        		infinite: true
	      		}
	    	},
	    	{
	      		breakpoint: 600,
	      		settings: {
	        		slidesToShow: 3,
	        		slidesToScroll: 1,
	        		infinite: true,
	        		centerMode: false
	      		}
	    	},
	    	{
	      		breakpoint: 480,
	      		settings: {
	        		slidesToShow: 1,
	        		slidesToScroll: 1,
	        		infinite: true
	      		}
	    	}]
	    };
	    $('.featuredProperties').slick(settings);
	}
	componentWillUpdate() {
		$('.featuredProperties').slick('unslick');
	}
	componentDidUpdate() {
	    let settings = {
	    	dots: false,
	  		infinite: true,
	  		speed: 300,
	  		slidesToShow: 3,
	  		slidesToScroll: 3,
	  		nextArrow: '<i class="fa fa-arrow-right"></i>',
  			prevArrow: '<i class="fa fa-arrow-left"></i>',
  			centerMode: true,
	  		responsive: [{
	      		breakpoint: 1024,
	      		settings: {
	        		slidesToShow: 3,
	        		slidesToScroll: 3,
	        		infinite: true
	      		}
	    	},
	    	{
	      		breakpoint: 600,
	      		settings: {
	        		slidesToShow: 2,
	        		slidesToScroll: 2,
	        		infinite: true
	      		}
	    	},
	    	{
	      		breakpoint: 480,
	      		settings: {
	        		slidesToShow: 1,
	        		slidesToScroll: 1,
	        		infinite: true
	      		}
	    	}]
	    };
	    $('.featuredProperties').slick(settings);
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
						<div className="featuredProperties" >
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