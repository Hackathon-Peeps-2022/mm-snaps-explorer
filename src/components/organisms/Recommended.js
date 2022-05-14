import React from "react";

import styled from "styled-components";

import SnapItem from "../molecules/SnapItem";
import { getSnapById } from "../../utils/MockSnaps";

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
  const someSnap = getSnapById("1");

  return (
    <Wrap>
      <h2>Recommended Snaps</h2>
      <div>
        <SnapItem {...someSnap} />
      </div>
    </Wrap>
  );
};

export default Recommended;
