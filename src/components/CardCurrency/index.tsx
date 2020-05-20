import React, { useState } from 'react';
import './style.scss';
import { BtcLogo, EthLogo, UsdcLogo, UsdtLogo } from '../Svg';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';

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
		balance: '$1.230.03'
	}
]

export default function Cards() {
	return (
		<div className="_cardCurrencyMain">
			<div className="container">
				<div className="row">
					<div className="_contentCard">
						{
							cards.map(res => {
								return (
									<div>
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