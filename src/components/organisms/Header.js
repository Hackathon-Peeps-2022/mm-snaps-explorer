import React, { useContext } from "react";

import { isMobile } from 'react-device-detect';
import mmbrand from "../../assets/mm_brand.svg";
import Button from "../atoms/Button";
import { EthProvider } from '../../ethereum';
import Account from '../atoms/Account';

const Header = () => {
  const { provider, user } = useContext(EthProvider);
  const { address } = user;
  
  const checkConnection = () => {
    switch (true) {
      case provider && address !== '':
        return <Account />;
      case provider !== null:
      case provider && isMobile:
        return <Button icon="fox">Connect with Wallet</Button>;
      case !provider && isMobile:
        return null;
      case !provider:
      default:
        return null;
    }
  }

  return (
    <header>
      <img src={mmbrand} alt="MetaMask" />
      {checkConnection()}
    </header>
  );
};

export default Header;
