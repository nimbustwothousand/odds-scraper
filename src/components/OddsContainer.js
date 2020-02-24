import React, { Component } from 'react';
import Odds from './Odds';
import axios from 'axios';
import cheerio from 'cheerio';
import uuidv4 from 'uuid/v4';

class OddsContainer extends Component {
	state = {
		scraper: 'http://api.scraperapi.com/',
		apiKey: 'da8c16bab358cd83e2268f993bc105e',
		url: 'https://s5.sir.sportradar.com/bet365/en/1/season/66441/fixtures',
		html: '',
		matches: [],
		dates: []
	}
	componentDidMount = async () => {
		await axios.get('http://api.scraperapi.com/?api_key=da8c16bab358cd83e2268f993bc105ec&url=https://s5.sir.sportradar.com/bet365/en/1/season/66441/fixtures&country_code=uk')
			.then(res => {
				this.setState({ html: res.data });
				const $ = cheerio.load(this.state.html);

				const table = $('table').find('tbody');
				console.log(table)
				/*let oddsArr = Object.values($('table').find('tbody>tr.cursor-pointer>td>div>button'));
				oddsArr.pop();
				oddsArr.pop();
				oddsArr.pop();
				oddsArr.pop();
				console.log(oddsArr)*/

				/*
				const matchObj = $('table').find('tbody>tr.cursor-pointer');
				const datesObj = $('table').find('tbody>tr>td.table-subheader.no-wrap.text-left');
				//console.log(datesObj);
				let datesArr = Object.values(datesObj);
				datesArr.pop();
				datesArr.pop();
				datesArr.pop();
				datesArr.pop();
				this.setState({ dates: datesArr });
				let matchArr = Object.values(matchObj);
				console.log(matchArr);
				matchArr.pop();
				matchArr.pop();
				matchArr.pop();
				matchArr.pop();
				this.setState({ matches: matchArr });*/
			})
			.catch(err => {
				console.error(err)
			});
	}

	render() {
		return (
			< div className='container' >
				<table>
					<thead>
						<tr>
							<th></th>
							<th>1</th>
							<th>X</th>
							<th>2</th>
						</tr>
					</thead>
					<tbody>
						{/*
							this.state.matches.map(match => (
								<Odds key={uuidv4()} data={match} />
							))
							*/}
					</tbody>
				</table>

			</div >
		)
	}
}

export default OddsContainer;