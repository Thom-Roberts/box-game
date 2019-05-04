import React from 'react';
import './line.css';

class Vline extends React.Component {
	render() {
		return (
			<span
				className={`vLine ${this.props.color}`}
				onClick={this.props.onClick}>
			</span>
		);
	}
}

export default Vline;