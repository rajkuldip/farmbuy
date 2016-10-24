
import React, {Component} from 'react';

class FarmBuyHeader extends Component {
	render() {
		return(
			<div className="header">
				<div className="content clearfix">
					<div className="secondaryNav">
						<a href="#" aria-label='Buy' title='Buy' className="active">Buy</a>
						<a href="#" aria-label='Sell' title='Sell'>Sell</a>
					</div>
					<nav className="navbar navbar-default">
					  <div className="container-fluid">
					    <div className="navbar-header">
					    	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				              <span className="sr-only">Toggle navigation</span>
				              <span className="icon-bar"></span>
				              <span className="icon-bar"></span>
				              <span className="icon-bar"></span>
				            </button>
					      <a className="navbar-brand" href="#">farm<span className="green">buy</span></a>
					    </div>
					    <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
					      <ul className="nav navbar-nav">
					        <li><a href="#">Agent Locator</a></li>
					        <li><a href="#">My Farmbuy</a></li>
					        <li><a href="#">About Us</a></li>
					        <li><a href="#">Farm Machinery for sale</a></li>
					      </ul>
					    </div>
					  </div>
					</nav>
					<div className="signin">
						<a href="#" aria-label="Sign In"> Sign In </a> or <a href="#" aria-label="Register">Register</a>
					</div>
				</div>
			</div>
		);
	}
}

export default FarmBuyHeader;