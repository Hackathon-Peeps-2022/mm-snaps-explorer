import React from 'react'

import styled from 'styled-components'

import { UnlabeledInput as Input } from '../atoms/Input'
import search from '../../assets/search.svg'

const Wrap = styled.div`
	height: 2em;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 0.35em 0 0.5em;
	gap: 0.25em;
	background-color: #F2F4F6;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	border-radius: 4px;
	img {
		height: 1em;
	}
	input {
		border: none;
		outline: none;
		background-color: transparent;
		width: 100%;
	}
`

const SearchBar = () => {
	return (
		<Wrap>
			<img src={search} alt=""/>
			<Input />
		</Wrap>
	)
}

export default SearchBar
