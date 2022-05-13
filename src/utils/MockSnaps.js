let SNAPS = [
  {
    id: "1",
    title: "Filsnap",
    creator: "ChainSafe",
    category: "Coin",
    installation: "npm:@chainsafe/filsnap",
    iconUrl:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/filecoin/info/logo.png",
    version: "latest",
    website: "https://github.com/ChainSafe/filsnap",
    description: "Metamask snap to interact with Filecoin dapps.",
  },
  {
    id: "2",
    title: "AleoSnap",
    creator: "piotr",
    category: "Utility",
    installation: "npm:aleo-snap",
    iconUrl:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
    version: "latest",
    website: "https://github.com/piotr-roslaniec/ethdenver-2022",
    description: "Access Aleo network from your browser using MetaMask.",
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

let brands = [...new Set(SNAPS.map((snap) => snap.brand))];

export { brands, SNAPS, filterByCategory, getSnapById };
