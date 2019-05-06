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
			scoreBlue: 0,
			scorePink: 0
		}
	}

	checkSquareScored(isHorizontal, lineNum) {
		// Scoring combinations
		const horizontals = [
			[0,3], [1,4], [2,5], [3,6], [4,7], [5,8], [6,9], [7,10], [8,11],
		];
		const verticals = [
			[0,1], [1,2], [2,3], [4,5], [5,6], [6,7], [8,9], [9,10], [10,11],
		];

		const squares = this.state.squares.slice();
		let scorePink = this.state.scorePink;
		let scoreBlue = this.state.scoreBlue;

		if(isHorizontal) {
			horizontals.forEach((pair, index) => {
				// If the pair includes
				if(pair.includes(lineNum)) {
					// See if both horizontals are filled
					if(this.state.hLines[pair[0]] !== 'white' && this.state.hLines[pair[1]] !== 'white') {
						// See if both verticals are also filled
						if(this.state.vLines[verticals[index][0]] !== 'white' &&
							this.state.vLines[verticals[index][1]] !== 'white') {
								// If blue now has a turn, it means pink scored
								if(this.state.blueTurn) {
									squares[index] = 'pink';
									scorePink++;
								}
								else {
									squares[index] = 'blue';
									scoreBlue++;
								}
							}
					}
				}
			});
		}
		else {
			verticals.forEach((pair, index) => {
				if(pair.includes(lineNum)) {
					if(this.state.vLines[pair[0]] !== 'white' && this.state.vLines[pair[1]] !== 'white') {
						if(this.state.hLines[horizontals[index][0]] !== 'white' &&
							this.state.hLines[horizontals[index][1]] !== 'white') {
								if(this.state.blueTurn) {
									squares[index] = 'pink';
									scorePink++;
								}
								else {
									squares[index] = 'blue';
									scoreBlue++;
								}
							}
					}
				}
			});
		}

		this.setState({scorePink: scorePink, scoreBlue: scoreBlue, squares: squares}, () => {
			this.checkGameEnd();
		});
	}

	/**
	 * Sees if any of the lines on screen are still white.
	 */
	checkGameEnd() {
		// If there are no more white lines, the game ends
		if(!this.state.hLines.includes('white') &&
		!this.state.vLines.includes('white')) {
			alert(`${this.state.scoreBlue > this.state.scorePink ? 'Blue ' : 'Pink '} wins!`);
		}
	}


	handleHlineClick(i) {
		if(this.state.hLines[i] === 'white') {
			const hLines = this.state.hLines.slice();
			hLines[i] = this.state.blueTurn ? 'blue' : 'pink';
			this.setState({
				hLines: hLines,
				blueTurn: !this.state.blueTurn,
			}, () => this.checkSquareScored(true, i));
		}

	}

	handleVlineClick(i) {
		if(this.state.vLines[i] === 'white') {
			const vLines = this.state.vLines.slice();
			vLines[i] = this.state.blueTurn ? 'blue' : 'pink';
			this.setState({
				vLines: vLines,
				blueTurn: !this.state.blueTurn,
			}, () => this.checkSquareScored(false, i));
		}
	}

	renderHline(i) {
		return (
			<Hline
				color={this.state.hLines[i]}
				onClick={() => this.handleHlineClick(i)} />
		);
	}

	renderVline(i) {
		return (
			<Vline
				color={this.state.vLines[i]}
				onClick={() => this.handleVlineClick(i)} />
		);
	}

	renderSquare(i) {
		return (
			<Square
				color={this.state.squares[i]}
			/>
		);
	}

	render() {
		const status = `Current Turn: ${this.state.blueTurn ? 'Blue' : 'Pink'}`;
		const scores = `Blue: ${this.state.scoreBlue}\n
		Pink: ${this.state.scorePink}`;
		return (
			<div>
				<div className="status">{status}</div>
				<div className="scores">{scores}</div>
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
					{this.renderSquare(3)}
					{this.renderVline(5)}
					{this.renderSquare(4)}
					{this.renderVline(6)}
					{this.renderSquare(5)}
					{this.renderVline(7)}
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
					{this.renderSquare(6)}
					{this.renderVline(9)}
					{this.renderSquare(7)}
					{this.renderVline(10)}
					{this.renderSquare(8)}
					{this.renderVline(11)}
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