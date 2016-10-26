
import React, {Component} from 'react';

class StateSearch extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	colState1:[],
	      	colState2:[],
	      	colState3:[]
	    }
	}
	componentDidMount() {
		var that = this;
		var mergedArray1 = [];
		var mergedArray2 = [];
		var mergedArray3 = [];
	    this.props.states.map((state, i) => {
			var myObj = {};
			myObj.name = state.name;
			myObj.abbr = state.abbr;
			myObj.number = that.props.farms[state.abbr];
			if (i < 2) {
				mergedArray1.push(myObj);
			} else if (i>1  &&  i<5) {
				mergedArray2.push(myObj);
			} else {
				mergedArray3.push(myObj);
			}
		});
		this.setState({
			colState1: mergedArray1,
			colState2: mergedArray2,
			colState3: mergedArray3
		})

	}
	render() {
		if (this.state.colState1.length == 0 || this.state.colState2.length == 0 || this.state.colState3.length == 0) {
			return null;
		}
		return(
			<div className="searchState">
				<div className="content">
					<h3>Search by State</h3>
					<div className="flexBox">
					<div className="col1 col">
						{
							this.state.colState1.map((state) => {
								return (
						 			<div className="farm">
										<a href="#" alt={state.name} >
						 					<img src={`/images/${state.abbr}.png`} title={state.name} className="hidden-xs"  />
						 					<img src={`/images/${state.abbr}-mobile.png`} title={state.name} className="visible-xs" />
						 					<div className='info'>
						 						<h3>{state.name}</h3>
						 						<p>{state.number} farms for sale</p>
						 					</div>
						 				</a>
						 			</div>
					 			);
							})

						}
					</div>
					<div className="col2 col">
						{
							this.state.colState2.map((state) => {
								return (
						 			<div className="farm">
										<a href="#" alt={state.name} >
						 					<img src={`/images/${state.abbr}.png`} title={state.name}  />
						 					<div className='info'>
						 						<h3>{state.name}</h3>
						 						<p>{state.number} farms for sale</p>
						 					</div>
						 				</a>
						 			</div>
					 			);
							})

						}
					</div>
					<div className="col3 col">
						{
							this.state.colState3.map((state) => {
								return (
									<div className="farm">
										<a href="#" alt={state.name} >
						 					<img src={`/images/${state.abbr}.png`} title={state.name} className="hidden-xs"  />
						 					<img src={`/images/${state.abbr}-mobile.png`} title={state.name} className="visible-xs" />
						 					<div className='info'>
						 						<h3>{state.name}</h3>
						 						<p>{state.number} farms for sale</p>
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