import React from 'react';
import './line.css';

class Hline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'white',
			className: 'hLine ',
		}

		// Binding the click function
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({color: 'blue'});
	}

	render() {
		return (
			<span className={this.state.className + this.state.color} onClick={this.handleClick}></span>
		);
	}
}

export default Hline;