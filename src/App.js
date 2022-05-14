import React, { useContext, useEffect } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import SnapGrid from "./pages/SnapGrid";
import SnapDetails from "./pages/SnapDetails";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/test" element={<SnapGrid />} />
          <Route path="/snap/:id" element={<SnapDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
