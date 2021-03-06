import React, { useEffect, useState } from "react";

import styled from "styled-components";
import SnapItem from "../molecules/SnapItem";
import MetamaskSnapsExplorer from "../../contracts/MetamaskSnapsExplorer.json";
import { ethers } from "ethers";

const Wrap = styled.div`
  height: fit-content;
  > h2 {
    margin: 0;
    padding: 0;
  }
`;

const Snaps = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 12px;
  padding-top: 30px;
`;

const Recommended = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [snaps, setSnaps] = useState([]);

  const contract = new ethers.Contract(
    "0x9dA6F8a65b7fc0381b8d4e943C6E31DBB83BE74C",
    MetamaskSnapsExplorer.abi,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/d509fb5c95c04ae49799a35691d3d7bc"
    )
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
      return (
        <SnapItem
          key={snap[0]}
          id={snap[0]}
          name={snap[2]}
          installation={snap[4]}
          description={snap[7]}
          logo={snap[5]}
          upvotes={snap[8].toNumber()}
          downvotes={snap[9].toNumber()}
        />
      );
    });

    return snapItems;
  };

  useEffect(() => {
    listSnaps();
  }, []); // eslint-disable-line

  return (
    <Wrap>
      <h2>Available Snaps</h2>
      <Snaps>{isLoading ? <h3>Loading...</h3> : renderSnaps()}</Snaps>
    </Wrap>
  );
};

export default Recommended;
