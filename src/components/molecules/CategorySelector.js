import React, { useState } from 'react'

import styled from 'styled-components'

const Wrap = styled.div`
	border: 1px solid cornflowerblue;
	grid-area: category;
`

const CategorySelector = () => {
	return (
		<Wrap>
			<p>Category <span>(Choose the best fit)</span></p>
		</Wrap>
	)
}

export default CategorySelector
