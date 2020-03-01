import React, { Component } from 'react';
import Odds from './Odds';
import axios from 'axios';
import cheerio from 'cheerio';
import uuidv4 from 'uuid/v4';

class OddsContainer extends Component {
	state = {
		SCRAPER_URL: `${process.env.REACT_APP_SCRAPER_PROXY}?api_key=${process.env.REACT_APP_API_KEY}&url=${process.env.REACT_APP_SCRAPER_URL}${process.env.REACT_APP_SCRAPER_PARAMS}`,
		matches: [],
		dates: []
	};

	objToArr = (obj) => {
		Object.values(obj).filter((element, index) => {
			return index < obj.length
		})
	}

	componentDidMount() {
		axios.get(this.state.SCRAPER_URL)
			.then(res => {
				const data = res.data;
				const $ = cheerio.load(data);

				const findMatches = $('table').find('tbody>tr.cursor-pointer');
				const matchesArr = Object.values(findMatches).filter((e, i) => { return i < findMatches.length });
				for (let i = 0; i < matchesArr.length; i++) {
					if (matchesArr[i].children[3].firstChild.firstChild === null) { matchesArr.splice(i, 1) }
				};
				this.setState({
					matches: matchesArr
				});

				const findDates = $('table').find('tbody>tr:not(.cursor-pointer)');
				const datesArr = Object.values(findDates).filter((e, i) => { return i < findDates.length });
				this.setState({
					dates: datesArr
				})
				console.log(this.state.dates)

			})
			.catch(err => { console.error(err) })
	}

	render() {
		return (
			<div className='container flex'>
				<table>
					<thead>
						<tr>
							<th>Kick Off</th>
							<th>1</th>
							<th>X</th>
							<th>2</th>
						</tr>
					</thead>
					<tbody>
						{this.state.matches ? (
							this.state.matches.map(match => (
								<Odds key={uuidv4()} match={match} />
							))
						) : (
								<tr>
									<td>Loading...</td>
								</tr>
							)}
					</tbody>
				</table>

			</div>
		);
	}
};

export default OddsContainer;