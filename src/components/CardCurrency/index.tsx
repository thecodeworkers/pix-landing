import React, { useState } from 'react';
import './style.scss';
import { BtcLogo, EthLogo, UsdcLogo, UsdtLogo } from '../Svg';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';


export default function Cards() {

	const [ btc, setBtc ] = useState('');

	const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,dash,litecoin')

	pricesWs.onmessage = (msg) => {
		const currencies = msg.data;
		const newCurrencies = JSON.parse(currencies)
		// newCurrencies['bitcoin'] ? setBtc(newCurrencies['bitcoin']) : setBtc(btc);
		console.log('______________________');
		console.log(btc);
	}

	const cards = [
		{
			class: '_cardUSDT',
			icon: <UsdtLogo />,
			balance: '$1.230.03'
		},
		{
			class: '_cardUSDC',
			icon: <UsdcLogo />,
			balance: '$1.230.03'
		},
		{
			class: '_cardETH',
			icon: <EthLogo />,
			balance: '$1.230.03'
		},
		{
			class: '_cardBTC',
			icon: <BtcLogo />,
			balance: btc
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
						<h1>{ btc}</h1>
						
					</div>
				</div>
			</div>
		</div>
	)
}