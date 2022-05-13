import { ethers } from 'ethers';
import MetamaskSnapsExplorer from '../contracts/MetamaskSnapsExplorer.json';

const contractAddress = process.env.METAMASK_SNAPS_EXPLORER_CONTRACT;
const provider = new ethers.providers.Web3Provider(window.ethereum);

const contract = new ethers.Contract(contractAddress, MetamaskSnapsExplorer.json, provider.getSigner());

export { provider, contract };
