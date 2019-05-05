import React from 'react';
import './Square.css';

class Square extends React.Component {
	render() {
		return (
			<div className="number">
				<p className={this.props.visible ? `visible ` : `hidden `}>
					1
				</p>
			</div>
		);
	}
}

export default Square;