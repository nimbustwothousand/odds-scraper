import React, { useRef, useState } from 'react';
import Input from './Input';

const Calculator = () => {
	const stakeInput = useRef()
	const back_oddsInput = useRef()
	const lay_oddsInput = useRef()
	const inplay_back_oddsInput = useRef()
	const commissionInput = useRef()
	const calculation = () => {
		const stake = stakeInput.current.value
		const back_odds = back_oddsInput.current.value
		const lay_odds = lay_oddsInput.current.value
		const inplay_back_odds = inplay_back_oddsInput.current.value
		const commission = commissionInput.current.value

		const odds_x_stake = stake * (back_odds - 1);
		const win_profit = Number(stake) + Number(odds_x_stake);
		const lay_commission = (lay_odds - 1) - commission + 1;
		const lay_stake = win_profit / lay_commission;
		const lay_x_stake = lay_stake * (lay_odds - 1);
		const bookie_win = odds_x_stake - lay_x_stake;
		const inplay_back_stake = lay_odds * lay_stake / inplay_back_odds;
		const back = inplay_back_stake * (inplay_back_odds - 1);
		const comm = (-lay_x_stake + back) * commission * -1 > 0 ? 0 : (-lay_x_stake + back) * commission * -1;
		const profit_loss = bookie_win + comm + back;
		setState({
			...state,
			stake,
			back_odds,
			lay_odds,
			inplay_back_odds,
			commission,
			odds_x_stake,
			win_profit,
			lay_commission,
			lay_stake,
			lay_x_stake,
			bookie_win,
			inplay_back_stake,
			back,
			comm,
			profit_loss
		})
	}

	const [state, setState] = useState({})

	const handleInput = (e) => {
		let value = e.target.value;
		let name = e.target.name;
		setState({
			...state,
			[name]: value
		});
		calculation()
	}

	return (
		<div className='container calculator' >
			<div className="qual-bet">
				<div className="back-bet grid">
					<Input ref={stakeInput}
						type={'text'}
						title={'Back Stake'}
						name={'stake'}
						value={state.stake}
						placeholder={''}
						handleChange={handleInput}
					/>
					<Input ref={back_oddsInput}
						type={'text'}
						title={'Back Odds'}
						name={'back_odds'}
						value={state.back_odds}
						placeholder={''}
						handleChange={handleInput}
					/>
				</div>
				<div className="lay-bet grid">
					<Input ref={lay_oddsInput}
						type={'number'}
						title={'Lay Odds'}
						name={'lay_odds'}
						value={state.lay_odds}
						placeholder={''}
						handleChange={handleInput}
					/>
					<Input ref={commissionInput}
						type={'number'}
						title={'Lay Commission'}
						name={'commission'}
						value={state.commission}
						placeholder={''}
						handleChange={handleInput}
					/>
					<Input
						type={'text'}
						title={'Lay Stake'}
						name={'lay_stake'}
						value={Math.floor(state.lay_stake * 100) / 100 ? Math.floor(state.lay_stake * 100) / 100 : ''}
						placeholder={''}
						handleChange={handleInput}
						disabled
					/>
					<Input
						type={'text'}
						title={'Qualifying Loss'}
						name={'bookie_win'}
						value={Math.floor(state.bookie_win * 100) / 100 ? Math.floor(state.bookie_win * 100) / 100 : ''}
						placeholder={''}
						handleChange={handleInput}
						disabled
					/>
				</div>
			</div>
			<div className="bet-triggered grid">
				<Input ref={inplay_back_oddsInput}
					type={'text'}
					title={'Exchange In-play Back Odds'}
					name={'inplay_back_odds'}
					value={state.inplay_back_odds}
					placeholder={''}
					handleChange={handleInput}
				/>
				<Input
					type={'text'}
					title={'Exchange In-play Back Stake'}
					name={'inplay_back_stake'}
					value={Math.floor(state.inplay_back_stake * 100) / 100 ? Math.floor(state.inplay_back_stake * 100) / 100 : ''}
					placeholder={''}
					handleChange={handleInput}
					disabled
				/>
			</div>
			<div className="result">
				<Input
					type={'text'}
					title={'Profit/Loss'}
					name={'profit_loss'}
					value={Math.floor(state.profit_loss * 100) / 100 ? Math.floor(state.profit_loss * 100) / 100 : ''}
					placeholder={''}
					handleChange={handleInput}
					disabled
				/>
			</div>
		</div>
	)

}

export default Calculator
