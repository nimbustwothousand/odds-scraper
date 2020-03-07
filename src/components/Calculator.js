import React from 'react';

function Calculator() {
	return (
		<div className='container calculator'>
			<div className="qual-bet">
				<div className="back-bet grid">
					<div>
						<h3>Back Stake</h3>
						<input type="text" name="backStake" id="backStake" />
					</div>
					<div>
						<h3>Back Odds</h3>
						<input type="text" name="backOdds" id="backOdds" />
					</div>
				</div>
				<div className="lay-bet grid">
					<div>
						<h3>Lay Odds</h3>
						<input type="text" name="layOdds" id="layOdds" />
					</div>
					<div>
						<h3>Lay Commission</h3>
						<div className="input-group">
							<input type="text" name="layCommision" id="layCommision" />
						</div>

					</div>
					<div>
						<h3>Lay Stake</h3>
						<input disabled type="text" name="layStake" id="layStake" />
					</div>
					<div>
						<h3>Qualifying Loss</h3>
						<input disabled type="text" name="qualLoss" id="qualLoss" />
					</div>
				</div>
			</div>
			<div className="bet-triggered grid">
				<div>
					<h3>Exchange In-play Back Odds</h3>
					<input type="text" name="inplayBackOdds" id="inplayBackOdds" />
				</div>
				<div>
					<h3>Exchange In-play Back Stake</h3>
					<input disabled type="text" name="exchBackStake" id="exchBackStake" />
				</div>
			</div>
			<div className="result">
				<div>
					<h3>Profit/Loss</h3>
					<input disabled type="text" name="result" id="result" />
				</div>
			</div>
		</div>
	)
}

export default Calculator
