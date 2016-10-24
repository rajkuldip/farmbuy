
import React, {Component} from 'react';

class FarmBuyFooter extends Component {
	render() {
		return(
			<div className="footer">
				<div className="content clearfix">
					<ul className="links clearfix">
						<li>
							<a href="#" title="Buy">Buy</a>
						</li>
						<li>
							<a href="#" title="Sell">Sell</a>
						</li>
						<li>
							<a href="#" title="Agent Locator">Agent Locator</a>
						</li>
						<li>
							<a href="#" title="My FarmBuy">My FarmBuy</a>
						</li>
						<li>
							<a href="#" title="About Us">About Us</a>
						</li>
						<li>
							<a href="#" title="Farm Machinery for Sale">Farm Machinery for Sale</a>
						</li>
						<li>
							<a href="#" title="Terms and Conditions" className="last">Terms and Conditions</a>
						</li>
					</ul>
					<ul className="social clearfix">
						<li className="facebook">
							<a href="#" title="Buy" className="fa fa-facebook"></a>
						</li>
						<li>
							<a href="#" title="Sell" className="fa fa-twitter"></a>
						</li>
						<li>
							<a href="#" title="Agent Locator" className="fa fa-google-plus last"></a>
						</li>
					</ul>

				</div>
				<div className="certificate">
					<span className="fa fa-copyright"></span> farmbuy.com 2016. All rights reserved.
				</div>

				
			</div>
		);
	}
}

export default FarmBuyFooter;