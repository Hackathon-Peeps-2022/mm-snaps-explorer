import React, { useState } from "react";

import styled from "styled-components";

import chevronUp from "../../assets/chevron-up.svg";
import chevronDown from "../../assets/chevron-down.svg";

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
		background-color: transparent;
		border: none;
		box-shadow: none;
    cursor: pointer;
  }
  > button:first-of-type {
    background-image: url(${chevronUp});
  }
  > button:last-of-type {
    background-image: url(${chevronDown});
  }
`;

const Vote = () => {
  const [vote, setVote] = useState(0);
  return (
    <Wrap>
      <button onClick={() => setVote(vote + 1)} />
      <p>{vote}</p>
      <button onClick={() => setVote(vote - 1)} />
    </Wrap>
  );
};

export default Vote;
