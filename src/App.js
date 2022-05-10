import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AnotherPage from "./pages/AnotherPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<AnotherPage />} exact path="/test" />
      </Routes>
    </HashRouter>
  );
};

export default App;
