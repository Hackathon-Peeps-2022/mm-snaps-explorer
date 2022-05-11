import { HashRouter, Route, Routes } from "react-router-dom";

import AnotherPage from "./pages/AnotherPage";
import Layout from "./pages/Layout";
import Main from "./pages/Main";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="test" element={<AnotherPage />} />
        </Route>
        <Route element={<AnotherPage />} exact path="/test" />
      </Routes>
    </HashRouter>
  );
};

export default App;
