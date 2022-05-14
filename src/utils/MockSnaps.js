let SNAPS = [
  {
    id: "1",
    title: "Filsnap",
    category: "Protocol",
    installation: "@chainsafe/filsnap",
    iconUrl:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/filecoin/info/logo.png",
    dapp: "https://filsnap.chainsafe.io/",
    description: "MetaMask snap for interacting with Filecoin dapps.",
  },
  {
    id: "2",
    title: "AleoSnap",
    category: "Utility",
    installation: "aleo-snap",
    iconUrl:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
    dapp: "https://aleo-snap-ethdenver-2022.netlify.app/",
    description: "Access Aleo network from your browser using MetaMask",
  },
  {
    id: "3",
    title: "BitcoinSnap",
    category: "Protocol",
    installation: "btcsnap",
    iconUrl:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png",
    dapp: "https://btcsnap.netlify.app/",
    description: "Manage your bitcoin with Metamask Flask and btcsnap",
  },
  {
    id: "4",
    title: "SnapAlgo",
    category: "Protocol",
    installation: "algorand",
    iconUrl:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/algorand/info/logo.png",
    dapp: "https://snapalgo.com/",
    description: "Adds the algorand cryptocurrency to metamask",
  },
  {
    id: "5",
    title: "MinaSnap",
    category: "Protocol",
    installation: "@chainsafe/minasnap",
    iconUrl:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
    dapp: "https://chainsafe.github.io/mina-snap/",
    description: "Metamask snap for interacting with mina procotol",
  },
];

function filterByCategory(category) {
  return SNAPS.filter(
    (snap) => snap.category.toLowerCase() === category.toLowerCase()
  );
}

function getSnapById(id) {
  return SNAPS.find((snap) => snap.id === id);
}

export { SNAPS, filterByCategory, getSnapById };
