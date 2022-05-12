import React from 'react'

import styled from 'styled-components'

import InstallButton from '../atoms/InstallButton'

const Wrap = styled.div`
	border: 1px solid red;
	background-color: #F2F4F6;
	border-radius: 5px;
	${'' /* display: grid; */}
	${'' /* grid-template: */}
	${'' /* 'name install'; */}
`

const SnapItem = () => {
	// Rough for rn
	// Make sure snapItem also has params to pass in
	// const { name, img, description } = snapItem
	return (
		<Wrap>
			{/* <img src={img} alt=""/> */}
			<p>Name</p>
			<InstallButton />
		</Wrap>
	)
}

export default SnapItem
