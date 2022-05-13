import fil from "../assets/icons/fil.svg";
import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import InstallButton from "../components/atoms/InstallButton";
import { useParams } from "react-router-dom";
import NoMatch from "./NoMatch";
import { getSnapById } from "../utils/MockSnaps";

const Wrap = styled.div`
  max-width: 800px;
  padding: 1em;
  gap: 1em;
  display: grid;
  grid-template:
    "img name name name"
    "img description description install"
    "img votes votes votes";
  > img {
    grid-area: img;
    height: 120px;
  }
  height: 120px;
`;

const Name = styled.div`
  grid-area: name;
  font-weight: 700;
  font-size: 18px;
`;

const Description = styled.div`
  grid-area: description;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.75px;
`;

const Votes = styled.div`
  grid-area: votes;
`;


const SnapDetails = () => {
  let { id } = useParams();

  if (!id) {
    return <NoMatch />;
  }

  let snap = getSnapById(id);

  if (!snap) {
    return <NoMatch />;
  }

  return (
    <Wrap>
      <img src={snap.iconUrl} alt={snap.name} />
      <Name>{snap.name}</Name>
      <Description>{snap.description}</Description>
      <InstallButton />
      <Votes>Votes blah blah | Rating blah blah | Category blah blah</Votes>
    </Wrap>
  );
};

export default SnapDetails;
