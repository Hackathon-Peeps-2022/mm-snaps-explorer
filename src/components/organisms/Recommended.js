import React, { useContext } from "react";

import styled from "styled-components";
import SnapItem from "../molecules/SnapItem";
import { EthProvider } from '../../ethereum';

const Wrap = styled.div`
  height: fit-content;
  > h2 {
    margin: 0;
    padding: 0;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Recommended = () => {
  const { provider, state } = useContext(EthProvider);
  const contract = state.contract;

  const checkConnection = () => {
    switch (true) {
      case provider:
        console.log('here');
        return renderSnaps();
      default:
        return <h3>Connect your wallet to interact with the site</h3>;
    }
  }

  const listSnaps = async () => {
    const snaps = [];
    const numberOfSnaps = await contract.getNumberOfSnaps();
    for (let i = 0; i < numberOfSnaps; i++) {
      const snap = await contract.getSnap(i);
      snaps.add(snap);
    }
    return snaps;
  };

  const renderSnaps = () => {
    const snaps = listSnaps();
    if (snaps.length === 0) {
      return (<h3>No snaps listed yet</h3>);
    }

    const snapItems = snaps.map((snap) => {
      return <SnapItem
        key={snap[0]}
        name={snap[1]}
        description={snap[4]}
      />
    });

    return snapItems;
  };

  return (
    <Wrap>
      <h2>Recommended Snaps</h2>
      <div>
        {checkConnection()}
      </div>
    </Wrap>
  );
};

export default Recommended;
