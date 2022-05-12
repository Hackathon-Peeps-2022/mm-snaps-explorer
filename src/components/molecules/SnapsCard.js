import React from "react";

import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  width: 20vw;
  flex-direction: column;
  > div {
    height: 150px;
    width: 100%;
    border-radius: 6px;
    background-color: ${(props) => props.bgColor};
  }
  h3,
  p {
    padding: 0;
    margin: 0;
  }
`;

const SnapCard = ({ snapItem, bgColor }) => {
  const { img, description, name } = snapItem;

  return (
    <Wrap bgColor={bgColor}>
      <div>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </Wrap>
  );
};

export default SnapCard;
