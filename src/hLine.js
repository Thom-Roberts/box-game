import React from 'react';
import './line.css';

class Hline extends React.Component {
	render() {
		return (
			<span
				className={`hLine ${this.props.color}`}
			 	onClick={this.props.onClick}>
			</span>
		);
	}
}

export default Hline;