import React, { useState, useEffect } from 'react';
import './style.scss';
import { BtcLogo, EthLogo, UsdcLogo, UsdtLogo } from '../Svg';
import { savePrice } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Cards = (props) => {
	const { currency } = props;

	useEffect(() => {
		props.action.savePrice();
	}, [props.currency])

	const numberFormat = (value) => {
		return Number(value).toFixed(2);
	}

	const cards = [
		{
			class: '_cardUSDT',
			icon: <UsdtLogo />,
			balance: `$ ${numberFormat(currency.dash)}`
		},
		{
			class: '_cardUSDC',
			icon: <UsdcLogo />,
			balance: `$ ${numberFormat(currency.litecoin)}`
		},
		{
			class: '_cardETH',
			icon: <EthLogo />,
			balance: `$ ${numberFormat(currency.ethereum)}`
		},
		{
			class: '_cardBTC',
			icon: <BtcLogo />,
			balance: `$ ${numberFormat(currency.bitcoin)}`
		}
	]
	return (
		<div className="_cardCurrencyMain">
			<div className="container">
				<div className="row">
					<div className="_contentCard">
						{
							cards.map((res, index) => {
								return (
									<div key={index}>
										<div className={res.class}>
											<div className="_cardChild">{res.icon}</div>
										</div>
										<div className="_price"><p>{res.balance}</p></div>

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
