import React from 'react'

import styled from 'styled-components'

const Wrap = styled.div`
	${'' /* Hardcoding until input */}
	height: 2em;
	background-color: #F2F4F6;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	border-radius: 4px;
`

const SearchBar = () => {
	return (
		<Wrap>Search</Wrap>
	)
}

export default SearchBar
