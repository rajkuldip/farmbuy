//Added jQuery for bootstrap js;
window.jQuery = window.$ = require('jquery');

require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('styles/App.scss');
require('slick-carousel/slick/slick.js');
require('slick-carousel/slick/slick.css');
require('font-awesome/css/font-awesome.min.css')

import React from 'react';
import $ from 'jquery';
import Header from 'components/header/FarmBuyHeader.jsx';
import Banner from 'components/banner/Banner.jsx';
import Carousel from 'components/carousel/Carousel.jsx';
import MortageCalc from 'components/MortageCalculator/MortageCalc.jsx';
import StateSearch from 'components/searchState/StateSearch.jsx';
import Footer from 'components/footer/FarmBuyFooter.jsx';


class AppComponent extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	propertyState: [],
	      	states: [],
	      	farms:[]
	    }
	}
	fetchProperties() {
		$.ajax({
		    url: 'http://localhost:8000/properties?filter=featured',
		    success : function(resp) {
		        this.setState({
		        	propertyState: resp.properties
		        });
		    }.bind(this),
		    error : function(error) {
		    	return error;
		    }.bind(this)
	    })
	}
	fetchFarms() {
		$.ajax({
		    url: 'http://localhost:8000/aggregations',
		    type: 'POST',
		    success : function(resp) {
		        this.setState({
		        	farms: resp
		        });
		    }.bind(this),
		    error : function(error) {
		    	return error;
		    }.bind(this)
	    })
	}
	fetchStates() {
		$.ajax({
		    url: 'http://localhost:8000/states',
		    success : function(resp) {
		        this.setState({
		        	states: resp.states
		        });
		    }.bind(this),
		    error : function(error) {
		    	return error;
		    }.bind(this)
	    })
	}
	componentDidMount() {
	    this.fetchProperties();
	    this.fetchStates();
	    this.fetchFarms();
	}

  	render() {
  		
  		if (this.state.states.length ==0 || this.state.farms.length==0 || this.state.propertyState.length==0) {
            return null;
        }
		return (
      		<div className="main">
        		<Header />
        		<Banner />
        		<Carousel property={this.state.propertyState}/>
        		<StateSearch farms={this.state.farms} states={this.state.states} />
        		<MortageCalc />
        		<Footer />
      		</div>
    	);
  	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
