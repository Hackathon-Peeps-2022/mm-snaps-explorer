// import { lighten, cover } from 'polished'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	html {
		height: 100vh;
	}
	body {
		margin: 0;
		padding: 0;
		position: relative;
		background-color: #fff;
		color: #000A;
		width: 100vw;
		height: 100%;
		#root {
			position: relative;
			width: 100vw;
			display: grid;
			height: 100%;
			padding: 1em;
			box-sizing: border-box;
			overflow: scroll;
			grid-template-columns: 14vw auto;
			grid-template-rows: 80px auto 80px;
			gap: 1em;
			grid-template-areas:
				"header header"
				"nav main"
				"footer footer";
			@media (min-width: 1500px) {
				grid-template-rows: 80px auto 80px;
				grid-template-columns: 14vw auto;
				justify-items: stretch;
			}
		}
	}

	header {
		align-items: center;
		display: flex;
		align-self: start;
		background-color: #F2F4F6;
		grid-area: header;
		flex-direction: row;
		height: 80px;
		justify-content: space-between;
		width: 100%;
		padding: 0 0.25em;
		border-radius: 8px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		> * { justify-self: end; }
		> img { height: 65px; }
		@media (min-width: 1200px) {
			// The MetaMask image already has some padding so we can either use an
			// image with no padding or only add padding to the right of the header
			// padding: 0 2em;
			grid-template-columns: 14vw auto;
		}
	}

	footer {
		height: 80px;
		box-sizing: border-box;
		border-radius: 8px;
		grid-area: footer;
		background-color: #F2F4F6;
		width: 100%;
		align-self: flex-end;
		display: flex;
		padding: 0 2em;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		> * { width: fit-content; }
		p > a { text-decoration: underline; }
		> div {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		@media (min-width: 600px) {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	nav {
		height: 100%;
		justify-self: center;
		background-color: #C3A9F9;
		opacity: 0.6;
		align-self: stretch;
		grid-area: nav;
		border-radius: 8px;
		width: 14vw;
		justify-self: center;
		align-self: stretch;
		@media (min-width: 1500px) {
			width: 14vw;
		}
	}
	main {
		grid-area: main;
		z-index: 10;
		width: 100%;
		justify-self: stretch;
		@media (min-width: 500px) {
			display: grid;
			place-items: center;
		}
	}
`

export default GlobalStyles
