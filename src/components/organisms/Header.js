import React from 'react'

import mmbrand from '../../assets/mm_brand.svg'
import Button from '../atoms/Button'
const Header = () => {
	return (
		<header>
			<img src={mmbrand} alt="MetaMask"/>
			<Button icon="fox">Connect with Wallet</Button>
		</header>
	)
}

export default Header
