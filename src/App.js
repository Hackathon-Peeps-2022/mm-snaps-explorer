import React, { useContext, useEffect } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import SnapGrid from "./pages/SnapGrid";
import { EthProvider } from './ethereum';

const App = () => {
  const { actions, dispatch, snaps, contract } = useContext(EthProvider);
  const { listSnaps } = actions;
  
  useEffect(() => {
    (async () => {
      try {
        const snaps = await listSnaps();
        dispatch({ type: 'SET_SNAPS', payload: { snaps } })
      } catch {
        dispatch({ type: 'SET_SNAPS', payload: [] })
      }
    })()
  }, [dispatch, contract, snaps]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main snaps={snaps}/>} />
          <Route path="/test" element={<SnapGrid />} />
          <Route path="/snap/:id" element={<SnapDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
