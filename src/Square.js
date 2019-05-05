import React from 'react';
import './Square.css';

class Square extends React.Component {
	render() {
		return (
			<div className="number">
				<p className={this.props.color}>
					1
				</p>
			</div>
		);
	}
}

export default Square;