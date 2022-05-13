import React from "react";

import styled from "styled-components";
import { transparentize } from "polished";

import InstallButton from "../atoms/InstallButton";
import Vote from "../molecules/Vote";

import fil from "../../assets/icons/fil.svg";

const Wrap = styled.div`
  background-color: #f2f4f6;
  border-radius: 5px;
  width: fit-content;
  display: grid;
  padding: 0.5em;
  gap: 0 0.5em;
  justify-content: space-around;
  grid-template:
    "vote img name install"
    "vote img description install";
  > img {
    grid-area: img;
    height: 40px;
  }
  p {
    padding: 0;
    margin: 0;
    text-align: left;
  }
  > p:first-of-type {
    grid-area: name;
  }
  > p:last-of-type {
    grid-area: description;
    color: ${transparentize(0.25, "#24292E")};
  }
  * {
    ${"" /* border: 1px solid red; */}
  }
`;

const SnapItem = () => {
  // Rough for rn
  // Make sure snapItem also has params to pass in
  // const { name, img, description } = snapItem
  return (
    <Wrap>
      <Vote />
      <img src={fil} alt="Filecoin Logo" />
      <p>Filecoin Snap</p>
      <p>Filecoin Snap Description</p>
      <InstallButton />
    </Wrap>
  );
};

export default SnapItem;
