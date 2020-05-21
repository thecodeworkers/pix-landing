import React, { useState, useEffect } from 'react';
import './style.scss';
import { BtcLogo, EthLogo, UsdcLogo, UsdtLogo } from '../Svg';
import { savePrice } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function Cards(props) {
	const [ btc, setBtc ] = useState(null);
	const [ eth, setEth ] = useState(null);
	const [ ltc, setLtc ] = useState(null);
	const [ dash, setDash ] = useState(null);

	useEffect(() => {
		props.action.savePrice();

		console.log(props);
		
	}, [])

		const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,dash,litecoin')

		pricesWs.onmessage = (msg) => {
			const currencies = msg.data;
			const newCurrencies = JSON.parse(currencies)
			proccessCurrencies(
				newCurrencies['bitcoin'], 
				newCurrencies['ethereum'],
				newCurrencies['litecoin'],
				newCurrencies['dash']
			);
		}

		const proccessCurrencies = (btc, eth, ltc, dash) => {
			const numberFormat = (value) => {
					return Number(value).toFixed(2);
			}

			if(btc) setBtc(numberFormat(btc));
			if(eth) setEth(numberFormat(eth));
			if(ltc) setLtc(numberFormat(ltc));
			if(dash) setDash(numberFormat(dash));
		}

	const cards = [
		{
			class: '_cardUSDT',
			icon: <UsdtLogo />,
			balance: dash ? `$ ${dash}` : '$0'
		},
		{
			class: '_cardUSDC',
			icon: <UsdcLogo />,
			balance: ltc ? `$ ${ltc}` : '$0'
		},
		{
			class: '_cardETH',
			icon: <EthLogo />,
			balance: eth ? `$ ${eth}` : '$0'
		},
		{
			class: '_cardBTC',
			icon: <BtcLogo />,
			balance: btc ? `$ ${btc}` : '$0'
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
	{currency}
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
