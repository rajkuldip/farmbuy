
import React, {Component} from 'react';

class StateSearch extends Component {
	render() {
		return(
			<div className="searchState">
				<div className="content">
					<h3>Search by State</h3>
					<div className="flexBox">
						<div className="col">
							{
								this.props.states.map((state, i) => {
									return (
							 			<div className="farm">
											<a href="#" alt={state.name} >
							 					<img src={`/images/${state.abbr}.png`} title={state.name} className="visible-md visible-lg"  />
							 					<img src={`/images/${state.abbr}-mobile.png`} title={state.name} className="visible-sm visible-xs" />
							 					<div className='info'>
							 						<h3>{state.name}</h3>
							 						<p>{this.props.farms[state.abbr]} farms for sale</p>
							 					</div>
							 				</a>
							 			</div>
						 			);
								})
							}
						</div>
					</div>
					<div className="teaser">
						<a href="#" title="Chat to your local agent today">
							<img src="/images/promo.png" alt="Promo Image" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default StateSearch;