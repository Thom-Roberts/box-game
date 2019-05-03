import React from 'react';
import './line.css';

class Vline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'blue',
			className: 'vLine '
		}
	}

	render() {
		return (
			<span className={this.state.className + this.state.color}></span>
		);
	}
}

export default Vline;