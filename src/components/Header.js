import React from 'react'

import styled from 'styled-components'

import mmbrand from '../assets/mm_brand.svg'
import Anchor from "./ui/atoms/Anchor";

const Header = () => {
	return (
		<header>
			<img src={mmbrand} alt="MetaMask"/>
			<Anchor link="https://google.com" name="gooooogle">Google</Anchor>
		</header>
	)
}

export default Header
