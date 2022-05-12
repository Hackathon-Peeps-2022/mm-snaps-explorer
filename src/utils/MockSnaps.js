let SNAPS = [
  {
    "id": "1",
    "title": "Filsnap",
    "creator": "ChainSafe",
    "installation": "npm:@chainsafe/filsnap",
    "iconUrl": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/filecoin/info/logo.png",
    "version": "latest",
    "website": "https://github.com/ChainSafe/filsnap",
    "describution": "Metamask snap to interact with Filecoin dapps."
  },
  {
    "id": "2",
    "title": "AleoSnap",
    "creator": "piotr",
    "installation": "npm:aleo-snap",
    "iconUrl": "",
    "version": "latest",
    "website": "https://github.com/piotr-roslaniec/ethdenver-2022",
    "describution": "Access Aleo network from your browser using MetaMask."
  }
];

function filterByCreator(brand) {
  return SNAPS.filter(
    (sneaker) => sneaker.brand.toLowerCase() === brand.toLowerCase()
  );
}

function getSnapById(id) {
  return SNAPS.find((snap) => snap.id === id);
}

let brands = [...new Set(SNAPS.map((snap) => snap.brand))];

export { brands, SNAPS, filterByCreator, getSnapById };