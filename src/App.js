import GlobalStyles from './theme/GlobalStyles'

import Header from './components/organisms/Header'
import Nav from './components/organisms/Nav'

const App = () => {
  return (
		<>
			<GlobalStyles />
			<Header />
			<Nav />
			<main></main>
			<footer></footer>
		</>
  );
}

export default App;
