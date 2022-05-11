import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	img {
	}
	h3, p {
		padding: 0;
		margin: 0;
	}
`

const SnapCard = ({ snapItem }) => {
	const { img, description, name } = snapItem

	return (
		<Container>
			<img src={img} alt={name}/>
			<h3>{name}</h3>
			<p>{description}</p>
		</Container>
	)
}

export default SnapCard
