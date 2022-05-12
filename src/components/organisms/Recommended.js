import React from 'react'

import styled from 'styled-components'

import SnapItem from '../molecules/SnapItem'

const Wrap = styled.div`
	height: fit-content;
	> h2 {
		margin: 0;
		padding: 0;
	}
	> div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`

const Recommended = () => {
	return (
		<Wrap>
			<h2>Recommended Snaps</h2>
			<div>
				<SnapItem />
			</div>
		</Wrap>
	)
}

export default Recommended
