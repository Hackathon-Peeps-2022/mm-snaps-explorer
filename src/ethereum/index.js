import React, { createContext, useEffect, useCallback } from 'react';
import MetamaskSnapsExplorer from '../contracts/MetamaskSnapsExplorer.json';
import { ethers } from 'ethers';
import { useImmerReducer } from 'use-immer';
import { initialState } from './initialState.js';
import { reducer } from '../reducers';

export const EthProvider = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const setAccount = useCallback(async (provider, accounts, networkName, chainId, contract) => {
    if (accounts.length > 0) {
      try {
        const connectedAccount = {
            address: accounts[0],
        };
        dispatch({ type: 'SET_ACCOUNT', payload: connectedAccount });
      } catch (e) {
        console.log(e);
      }
    } else {
      dispatch({ type: 'SET_ACCOUNT', payload: initialState.user });
    }
  }, [dispatch])

  const connectUser = useCallback(async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      if (provider) {
        const signer = await provider.getSigner();
        const { name, chainId } = await provider.getNetwork();
        const contract = new ethers.Contract('0x8eb6961708Be3684Da35B617a4Ec8e7bdefCB4D5', MetamaskSnapsExplorer.abi, signer);
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(provider, accounts, name, chainId, contract);
        dispatch({
          type: 'CONNECTED_PROVIDER',
          payload: {
            provider,
            signer,
            name,
            chainId,
            contract
          }
        })
      }
    } catch (e) {
      console.log(e);
    }
  }, [setAccount, dispatch]);

  useEffect(() => {
    if (window.ethereum) {
      connectUser();

      window.ethereum.on('accountsChanged', () => {
        connectUser()
        window.location.replace('/')
      });
      window.ethereum.on('chainChanged', () => {
        connectUser()
        window.location.replace('/')
      });
    }
  }, [connectUser, dispatch]);

  const { contracts, isLoading, isConnected, name, chainId, provider, user, web3Error } = state;

  const connect = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(provider, accounts);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <EthProvider.Provider
      value={{
        state,
        dispatch,
        contracts,
        isLoading,
        isConnected,
        provider,
        user,
        web3Error,
        name,
        chainId,
        actions: { connect }
      }}>
      {children}
    </EthProvider.Provider>
  )
}
