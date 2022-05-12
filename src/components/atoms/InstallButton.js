import React from "react";

import styled from "styled-components";

const Container = styled.button`
  border: 2px solid #9c5add;
  background-color: transparent;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  font-family: "Euclid", serif;
`;

const InstallButton = () => {
  // onClick function that calls the wallet_enable json-rpc method

  return <Container>Install</Container>;
};

export default InstallButton;