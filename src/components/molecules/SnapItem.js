import React from "react";

import styled from "styled-components";
import { transparentize } from "polished";

import InstallButton from "../atoms/InstallButton";
import Vote from "../molecules/Vote";

const Wrap = styled.div`
  border: 1px solid red;
  background-color: #f2f4f6;
  border-radius: 5px;
  width: fit-content;
  display: grid;
  padding: 0.5em;
  gap: 0.5em;
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

const SnapItem = (props) => {
  // Rough for rn
  // Make sure snapItem also has params to pass in
  // const { name, img, description } = snapItem
  return (
    <Wrap>
      <Vote />
      <img src={props.iconUrl} alt="Filecoin Logo" />
      <p>{props.title}</p>
      <p>{props.description}</p>
      <InstallButton />
    </Wrap>
  );
};

export default SnapItem;
