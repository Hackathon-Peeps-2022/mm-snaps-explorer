import React, { useEffect, useState } from "react";

import styled from "styled-components";
import SnapItem from "../molecules/SnapItem";
import MetamaskSnapsExplorer from '../../contracts/MetamaskSnapsExplorer.json';
import { ethers } from 'ethers';

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
  const [isLoading, setIsLoading] = useState(true);
  const [snaps, setSnaps] = useState([]);

  const contract = new ethers.Contract(
    '0x8eb6961708Be3684Da35B617a4Ec8e7bdefCB4D5',
    MetamaskSnapsExplorer.abi,
    ethers.getDefaultProvider('https://rinkeby.infura.io/v3/d509fb5c95c04ae49799a35691d3d7bc')
  );

  const listSnaps = async () => {
    const snapList = [];
    const numberOfSnaps = await contract.getNumberOfSnaps();
    for (let i = 0; i < numberOfSnaps; i++) {
      const snap = await contract.getSnap(i);
      snapList.push(snap);
    }
    setSnaps(snapList);
    setIsLoading(false);
  };

  const renderSnaps = () => {
    if (snaps.length === 0) {
      return <h3>No snaps listed yet</h3>;
    }

    const snapItems = snaps.map((snap) => {
      return <SnapItem
        key={snap[0]}
        name={snap[2]}
        description={snap[4]}
      />
    });

    return snapItems;
  };

  useEffect(() => {
    listSnaps();
  });

  return (
    <Wrap>
      <h2>Available Snaps</h2>
      <div>
        { isLoading? <h3>Loading...</h3> : renderSnaps() }
      </div>
    </Wrap>
  );
};

export default Recommended;
