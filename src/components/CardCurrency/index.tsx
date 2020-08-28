import React, { useState, useEffect } from 'react';
import './style.scss';
import { BtcLogo, EthLogo, Usd, DashLogo } from '../Svg';
import { TimelineMax } from 'gsap/all';
import { savePrice, saveCardFlip} from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Cards = (props) => {
	const { currency, flipState, action} = props;
	
	const [currencyPrice, setCurrencyPrice ] = useState(null);
	const [ textClass, setTextClass ] = useState(null);

	const timeLine = new TimelineMax({ paused: true });

	useEffect(() => {
		props.action.savePrice();
	}, [props.currency])

	const numberFormat = (value) => {
		return Number(value).toFixed(2);
	}

	const showCurrency = (currency) => {
		setCurrencyPrice(currency.balance)
		setTextClass(currency.textClass)
	}

	const hideCurrency = () => {
		setCurrencyPrice(null);
		setTextClass(null);
	}

	const	startAnimation = (param) => {
		const key = param.flip;
		const colorIcon = param.iconKey;

		console.log(flipState)
		if(!flipState[key]) {
			timeLine.play()
			.to(`.${param.class}`, 0.5, {rotationY:'+=180'}, 0.3)
			.to(`.${param.reverseClass}`, 0.2, {backgroundColor: param.color}, 0.3)
	
			setTimeout(() => {
				action.saveCardFlip({[colorIcon]: '#FFFFFF'})
			}, 300)

			action.saveCardFlip({[key]: true})
			return;
		} 
			timeLine.play()
			.to(`.${param.class}`, 0.5, {rotationY:'0'}, 0.3)
			.to(`.${param.reverseClass}`, 0.2, {backgroundColor: 'rgba(0,0,0,0)'}, 0.3)
	
			setTimeout(() => {
				setTimeout(() => {
					action.saveCardFlip({[colorIcon]: param.color})
				}, 300)
			}, 300)
			
			action.saveCardFlip({[key]: false})
	}

	let cards = [
		{
			class: '_cardBTC',
			textClass: '_textBtc',
			reverseClass: '_reverseBtc',
			iconKey: 'btcIcon',
			color: '#f7931a',
			icon: <BtcLogo fillIcon={flipState.btcIcon} />,
			balance: `$ ${numberFormat(currency.bitcoin)}`,
			flip: 'btcFlip',

		},
		{
			class: '_cardETH',
			textClass: '_textEth',	
			reverseClass: '_reverseEth',
			icon: <EthLogo fillIcon={flipState.ethIcon} />,
			balance: `$ ${numberFormat(currency.ethereum)}`,
			flip: 'ethFlip',
			iconKey: 'ethIcon',
			color: '#444457'
		},
		{
			class: '_cardDASH',
			textClass: '_textDash',
			reverseClass: '_reverseDash',
			icon: <DashLogo fillIcon={flipState.dashIcon} />,
			balance: `$ ${numberFormat(currency.dash)}`,
			flip: 'dashFlip',
			color: '#008de4',
			iconKey: 'dashIcon',
		},
		{
			class: '_cardUSDT',
			textClass: '_textUsdt',
			reverseClass: '_reverseUsdt',
			icon: <Usd fillIcon={flipState.usdtIcon} />,
			balance: `$ ${numberFormat(currency.litecoin)}`,
			color: '#57d6af',
			flip: 'usdtFlip',
			iconKey: 'usdtIcon',
		},
	
	]
	return (
		<div className="_cardCurrencyMain">
			<div className="container">
					<div className='_hey'>
						<p className={ textClass ? textClass : '_pricefadeIn'}> {currencyPrice} </p>
					</div>
				<div className="row">
					<div className="_contentCard">
						{
							cards.map((res, index) => {
								return (
									<div key={index} onMouseEnter={() => showCurrency(res)} onMouseLeave={() => hideCurrency()} onClick={() => startAnimation(res)}>
										<div className={res.class}>
										
											<div className="_cardChild">{res.icon}
											<div className={res.reverseClass}></div>
											
											</div>
										</div>
										{/* <div className="_price"><p>{res.balance}</p></div> */}

										<h1></h1>
									</div>

								)
							})
						}

					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({currency, flipState }) => (
	{currency, flipState}
);

const mapDispatchToProps = dispatch => {
	const actions = {
		savePrice,
		saveCardFlip
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
