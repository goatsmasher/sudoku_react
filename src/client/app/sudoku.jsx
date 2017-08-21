import React from "react";

class Sudoku extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: [
				[{ value: "" }, { value: "" }, { value: "" }],
				[{ value: "" }, { value: "" }, { value: "" }],
				[{ value: "" }, { value: "" }, { value: "" }]
			]
		}
		this.generateBoard = this.generateBoard.bind(this);
		this.placeBoard = this.placeBoard.bind(this);
	}

	generateBoard() {
		const board = this.state.grid;
		let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (let i = 0; i < 3; i++) {
			for (let k = 0; k < 3; k++) {
				const randomNumber = Math.floor(Math.random() * possibleNumbers.length)
				board[i][k] = possibleNumbers[randomNumber];
				possibleNumbers.splice(randomNumber, 1)
			}
		}
		this.setState({
			grid: board
		});
	}

	placeBoard() {
		return (
			this.state.grid.map(row => {
				return row.map(cell => {
					return <div>{cell.value}</div>
				})
			})
		)
	}

	render() {
		return (
			<div>
				<p>This is sudoku</p>
				{this.placeBoard()}
				<button onClick={this.generateBoard}>Generate a board</button>
			</div>
		)
	}
}

export default Sudoku;