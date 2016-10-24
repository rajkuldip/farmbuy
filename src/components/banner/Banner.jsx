
import React, {Component} from 'react';

class Banner extends Component {
	render() {
		return(
			<div className="banner">
				<div className="data">
					<div className="logo">farm<span>buy</span></div>
					<div className="farmSearch">
						<form method="post" className="form-inline">
							<div className="form-group controls">
							    <label className="sr-only" htmlFor="selectSuburb"></label>
							    <select id="selectSuburb" name="selectSuburb" className="form-control">
							    	<option>Select State</option>
							    	{
							    		this.props.states.map((state) => {
							    			return (
							    				<option value={state.abbr}>{state.name}</option>
							    			);
							    		})
							    	}
							    </select>
							</div>
							<div className="form-group controls">
							    <label className="sr-only" htmlFor="searchField"></label>
							    <input type="text" className="form-control" id="searchField" placeholder="Select by religion, suburb, postcode or address" />
							</div>
							<button type="submit" className="btn btn-success">Search</button>
							<div className="form-group controls checkSuburb">
							    <input type="checkBox" className="form-control" id="suburbCheck" />
							    <label htmlFor="suburbCheck">Surrounding suburbs</label>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;