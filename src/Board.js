import React from 'react';
import Dot from './Dot';
import Vline from './vLine';
import Hline from './hLine';
import Square from './Square';
import './Board.css'

class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			blueTurn: true,
			hLines: Array(12).fill('white'),
			vLines: Array(12).fill('white'),
			squares: Array(9).fill('white'),
		}
	}

	handleHlineClick(i) {
		const hLines = this.state.hLines.slice();
		hLines[i] = this.state.blueTurn ? 'blue' : 'pink';
		this.setState({
			hLines: hLines,
			blueTurn: !this.state.blueTurn,
		});
	}

	handleVlineClick(i) {
		const vLines = this.state.vLines.slice();
		vLines[i] = this.state.blueTurn ? 'blue' : 'pink';
		this.setState({
			vLines: vLines,
			blueTurn: !this.state.blueTurn,
		});
	}

	renderHline(i) {
		return (
			<Hline
				key={i}
				color={this.state.hLines[i]}
				onClick={() => this.handleHlineClick(i)} />
		);
	}

	renderVline(i) {
		return (
			<Vline
				key={i}
				color={this.state.vLines[i]}
				onClick={() => this.handleVlineClick(i)} />
		);
	}

	renderSquare(i) {
		return (
			<Square
				key={i}
			/>
		);
	}

	render() {
		const status = `Next Player: ${this.state.blueTurn ? 'Blue' : 'Pink'}`;

		return (
			<div>
				<div>{status}</div>
				<Square />
				<div className="row">
					<Dot />
					{this.renderHline(0)}
					<Dot />
					{this.renderHline(1)}
					<Dot />
					{this.renderHline(2)}
					<Dot />
				</div>
				<div className="row">
					{this.renderVline(0)}
					{this.renderSquare(0)}
					{this.renderVline(1)}
					{this.renderSquare(1)}
					{this.renderVline(2)}
					{this.renderSquare(2)}
					{this.renderVline(3)}
					{this.renderSquare(3)}
				</div>
				<div className="row">
					<Dot />
					{this.renderHline(3)}
					<Dot />
					{this.renderHline(4)}
					<Dot />
					{this.renderHline(5)}
					<Dot />
				</div>
				<div className="row">
					{this.renderVline(4)}
					{this.renderSquare(4)}
					{this.renderVline(5)}
					{this.renderSquare(5)}
					{this.renderVline(6)}
					{this.renderSquare(6)}
					{this.renderVline(7)}
					{this.renderSquare(7)}
				</div>
				<div className="row">
					<Dot />
					{this.renderHline(6)}
					<Dot />
					{this.renderHline(7)}
					<Dot />
					{this.renderHline(8)}
					<Dot />
				</div>
				<div className="row">
					{this.renderVline(8)}
					{this.renderSquare(8)}
					{this.renderVline(9)}
					{this.renderSquare(9)}
					{this.renderVline(10)}
					{this.renderSquare(10)}
					{this.renderVline(11)}
					{this.renderSquare(11)}
				</div>
				<div className="row">
					<Dot />
					{this.renderHline(9)}
					<Dot />
					{this.renderHline(10)}
					<Dot />
					{this.renderHline(11)}
					<Dot />
				</div>
			</div>
		)
	}
}

export default Board;