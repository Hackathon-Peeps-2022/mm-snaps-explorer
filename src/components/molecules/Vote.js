import React, { useContext } from "react";

import styled from "styled-components";

import chevronUp from "../../assets/chevron-up.svg";
import chevronDown from "../../assets/chevron-down.svg";
import { EthProvider } from "../../ethereum";
import { calculateRating } from "../../utils";

const Wrap = styled.div`
  grid-area: vote;
  display: flex;
  flex-direction: column;
  width: 2em;
  align-items: center;
  button {
    height: 1em;
    width: 1em;
    background-position: center;
    border: none;
    cursor: pointer;
  }
  > button:first-of-type {
    background-image: url(${chevronUp});
  }
  > button:last-of-type {
    background-image: url(${chevronDown});
  }
`;

const Vote = ({ id, upvotes, downvotes }) => {
  const { contract } = useContext(EthProvider);
  const rating = calculateRating(upvotes, downvotes);

  const upvote = async (id) => {
    await contract.upvote(id);
  };

  const downvote = async (id) => {
    await contract.downvote(id);
  };

  return (
    <Wrap>
      <button onClick={() => upvote(id)} />
      <p>{rating}</p>
      <button onClick={() => downvote(id)} />
    </Wrap>
  );
};

export default Vote;
