import * as React from "react";
import { useSearchParams } from "react-router-dom";
import TopBanner from "../components/organisms/TopBanner";
import SnapItem from "../components/molecules/SnapItem";
import styled from "styled-components";
import { useState } from "react";
import { ethers } from "ethers";
import MetamaskSnapsExplorer from "../contracts/MetamaskSnapsExplorer.json";
import { useEffect } from "react";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Snaps = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 12px;
  padding-top: 30px;
`;

const SnapGrid = () => {
  const [isLoading, setIsLoading] = useState(true); // eslint-disable-line
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

  useEffect(() => {
    listSnaps();
  }, []); // eslint-disable-line

  let [searchParams] = useSearchParams();
  let category = searchParams.get("category");

  const filteredSnaps = React.useMemo(() => {
    if (!category) return snaps;
    return snaps.filter(
      (snap) => snap.category.toLowerCase() === category.toLowerCase()
    );
  }, [category, snaps]);
  return (
    <Wrap>
      <TopBanner />
      {filteredSnaps.length === 0 ? (
        <h3>No Snaps Found :(</h3>
      ) : (
        <Snaps>
          {filteredSnaps.map((snap) => {
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
          })}
        </Snaps>
      )}
    </Wrap>
  );
};

export default SnapGrid;
