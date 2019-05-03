import React from 'react';
import Dot from './Dot';
import './Board.css'

class Board extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<Dot />
					<Dot />
					<Dot />
					<Dot />
				</div>
				<div className="row">
					<Dot />
					<Dot />
					<Dot />
					<Dot />
				</div>
				<div className="row">
					<Dot />
					<Dot />
					<Dot />
					<Dot />
				</div>
				<div className="row">
					<Dot />
					<Dot />
					<Dot />
					<Dot />
				</div>
			</div>
		)
	}
}

export default Board;