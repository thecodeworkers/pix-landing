import React, { useState, useEffect } from 'react';
import './style.scss';
import { BtcLogo, EthLogo, Usd, DashLogo } from '../Svg';
import { savePrice } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Cards = (props) => {
	const { currency } = props;

	const [currencyPrice, setCurrencyPrice ] = useState(null);
	const [ textClass, setTextClass ] = useState(null);

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
		setTextClass(null)
	}

	const cards = [
		{
			class: '_cardBTC',
			textClass: '_textBtc',
			icon: <BtcLogo />,
			balance: `$ ${numberFormat(currency.bitcoin)}`
		},
		{
			class: '_cardETH',
			textClass: '_textEth',	
			icon: <EthLogo />,
			balance: `$ ${numberFormat(currency.ethereum)}`
		},
		{
			class: '_cardDASH',
			textClass: '_textDash',
			icon: <DashLogo />,
			balance: `$ ${numberFormat(currency.dash)}`
		},
		{
			class: '_cardUSDT',
			textClass: '_textUsdt',
			icon: <Usd/>,
			balance: `$ ${numberFormat(currency.litecoin)}`
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
									<div key={index} onMouseEnter={() => showCurrency(res)} onMouseLeave={() => hideCurrency()}>
										<div className={res.class}>
											<div className="_cardChild">{res.icon}</div>
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

const mapStateToProps = (currency) => (
	currency
);

const mapDispatchToProps = dispatch => {
	const actions = {
		savePrice
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
