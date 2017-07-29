import React from "react";

class Sudoku extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: []
		}
	}
	render() {
		return (
			<div>
				<p>This is sudoku</p>
			</div>
		)
	}
}

export default Sudoku;