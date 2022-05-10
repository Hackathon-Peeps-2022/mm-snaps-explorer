import GlobalStyles from './theme/GlobalStyles'

import Header from './components/organisms/Header'
import Nav from './components/organisms/Nav'
import TopBanner from './components/organisms/TopBanner'

const App = () => {
  return (
		<>
			<GlobalStyles />
			<Header />
			<Nav />
			<main>
				<TopBanner></TopBanner>
			</main>
			<footer></footer>
		</>
  );
}

export default App;
