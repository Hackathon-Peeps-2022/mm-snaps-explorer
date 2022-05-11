import GlobalStyles from "../theme/GlobalStyles";

import Header from "../components/organisms/Header";
import Nav from "../components/organisms/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;