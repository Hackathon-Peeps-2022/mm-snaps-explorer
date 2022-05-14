import React, { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import SnapItem from "../molecules/SnapItem";
// <<<<<<< contracts
import { EthProvider } from '../../ethereum';
// =======
// import { getSnapById } from "../../utils/MockSnaps";
// >>>>>>> main

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

// <<<<<<< contracts
const Recommended = ({ snaps }) => {
  const { provider, actions, dispatch } = useContext(EthProvider);
  console.log(snaps);
// =======
// const Recommended = () => {
//   const someSnap = getSnapById("1");
// >>>>>>> main

  return (
    <Wrap>
      <h2>Recommended Snaps</h2>
      <div>
// <<<<<<< contracts
//       {provider && snaps?.map((snap) => {
//         return <SnapItem
//             key={snap[0]}
//             name={snap[1]}
//             description={snap[4]}
//           />
//       })}
// =======
//         <SnapItem {...someSnap} />
// >>>>>>> main
      </div>
    </Wrap>
  );
};

export default Recommended;
