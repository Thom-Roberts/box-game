import React from 'react';
import Dot from './Dot';
import Vline from './vLine';
import Hline from './hLine';
import './Board.css'

class Board extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<Dot />
					<Hline />
					<Dot />
					<Hline />
					<Dot />
					<Hline />
					<Dot />
				</div>
				<Vline />
				<Vline />
				<Vline />
				<Vline />
				<div className="row">
					<Dot />
					<Hline />
					<Dot />
					<Hline />
					<Dot />
					<Hline />
					<Dot />
				</div>
				<Vline />
				<Vline />
				<Vline />
				<Vline />
				<div className="row">
					<Dot />
					<Hline />
					<Dot />
					<Hline />
					<Dot />
					<Hline />
					<Dot />
				</div>
				<Vline />
				<Vline />
				<Vline />
				<Vline />
				<div className="row">
					<Dot />
					<Hline />
					<Dot />
					<Hline />
					<Dot />
					<Hline />
					<Dot />
				</div>
			</div>
		)
	}
}

export default Board;