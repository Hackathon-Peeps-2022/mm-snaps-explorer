import React from "react";

import styled from "styled-components";

import SnapsCard from "../molecules/SnapsCard";
import { images } from "../../assets/featuredImages";

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

const Featured = () => {
  const { img, img2, img3, img4 } = images;
  const bgColors = ["#36bfc5", "#00a3fe", "#fa004b", "#5303f7"];
  const featuredSnaps = [
    {
      name: "BitcoinSnap",
      img: img,
      description: "Manage your bitcoin with Metamask Flask and btcsnap",
    },
    {
      name: "SnapAlgo",
      img: img2,
      description: "Adds the algorand cryptocurrency to metamask",
    },
    {
      name: "Filsnap",
      img: img3,
      description: "Adds the algorand cryptocurrency to metamask",
    },
    {
      name: "AleoSnap",
      img: img4,
      description: "Access Aleo network from your browser using MetaMask",
    },
  ];
  return (
    <Wrap>
      <h2>Featured Snaps</h2>
      <div>
        {featuredSnaps.map((snap, idx) => (
          <SnapsCard
            snapItem={snap}
            bgColor={bgColors[idx]}
            key={`Snap ${idx + 1}`}
          />
        ))}
      </div>
    </Wrap>
  );
};

export default Featured;
