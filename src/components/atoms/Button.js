import React, { useContext } from "react";
import styled from "styled-components";
import fox from "../../assets/fox.svg";
import { EthProvider } from "../../ethereum";
import { tap, hover } from "../../theme/FramerVariants.js";

const Wrap = styled.button`
  border: 1px solid #bbc0c5;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 12px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  padding: 0.75em 1em;
  border-radius: 25px;
  img {
    height: 18px;
  }
`;

const Button = ({ children, icon = null }) => {
  const { actions } = useContext(EthProvider);
  const { connect } = actions;
  const icons = { fox };

  return (
    <Wrap onClick={() => connect()} whileHover={hover} whileTap={tap}>
      {icon && <img src={icons[icon]} alt="" />}
      {children}
    </Wrap>
  );
};

export default Button;
