import React, { Component } from 'react';

class Odds extends Component {
	state = {
		time: this.props.match.firstChild.firstChild.firstChild.firstChild.data,
		homeTeam: this.props.match.childNodes[2].firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.data,
		awayTeam: this.props.match.childNodes[2].firstChild.firstChild.childNodes[2].firstChild.childNodes[1].firstChild.firstChild.firstChild.firstChild.data,
		homeOdds: this.props.match.children[3].firstChild.firstChild.firstChild.data,
		drawOdds: this.props.match.children[4].firstChild.firstChild.firstChild.data,
		awayOdds: this.props.match.children[5].firstChild.firstChild.firstChild.data
	}
	render() {
		return (
			<tr>
				<td>{this.state.time}</td>
				<td>
					<div>{this.state.homeTeam}</div>
					<div>{this.state.homeOdds}</div>
				</td>
				<td>
					<div>-</div>
					<div>{this.state.drawOdds}</div>
				</td>
				<td>
					<div>{this.state.awayTeam}</div>
					<div>{this.state.awayOdds}</div>
				</td>
			</tr>
		)
	}
}

export default Odds
