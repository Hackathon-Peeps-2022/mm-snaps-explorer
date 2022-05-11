import React from 'react'

import styled from 'styled-components'

const Wrap = styled.div`
	${'' /* Need to make reusable grid/flex container here */}
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
		</Wrap>
	)
}

export default Recommended
