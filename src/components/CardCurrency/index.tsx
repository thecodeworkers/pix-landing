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
			balance: currency.dash ? `$ ${numberFormat(currency.dash)}` : '$0'
		},
		{
			class: '_cardUSDC',
			icon: <UsdcLogo />,
			balance: currency.litecoin ? `$ ${numberFormat(currency.litecoin)}` : '$0'
		},
		{
			class: '_cardETH',
			icon: <EthLogo />,
			balance: currency.ethereum ? `$ ${numberFormat(currency.ethereum)}` : '$0'
		},
		{
			class: '_cardBTC',
			icon: <BtcLogo />,
			balance: currency.bitcoin ? `$ ${numberFormat(currency.bitcoin)}` : '$0'
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
