import React from 'react'

import styled from 'styled-components'

import mmbrand from '../assets/mm_brand.svg'

const Header = () => {
	return (
		<header>
			<img src={mmbrand} alt="MetaMask"/>
		</header>
	)
}

export default Header
