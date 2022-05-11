import GlobalStyles from "../theme/GlobalStyles";

import Header from "../components/organisms/Header";
import Nav from "../components/organisms/Nav";
import TopBanner from "../components/organisms/TopBanner";
import Featured from "../components/organisms/Featured";
import Recommended from "../components/organisms/Recommended";

const Home = () => {
	// How do we get the featured snappies?
  return (
    <>
      <GlobalStyles />
      <Header />
      <Nav />
      <main>
        <TopBanner />
				<Featured />
				<Recommended />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
