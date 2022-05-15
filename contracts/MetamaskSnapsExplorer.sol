// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.13;

contract MetamaskSnapsExplorer {
    struct RegisteredSnap {
        uint id;
        address creator;
        string name;
        string category;
        string installation;
        string iconUrl;
        string dapp;
        string description;
        uint upvotes;
        uint downvotes;
    }

    address private owner = msg.sender;
    RegisteredSnap[] _snaps;
    uint[4] private featuredSnaps = [0, 1, 2, 3];

    function getNumberOfSnaps() public view returns (uint) {
        return _snaps.length;
    }

    function getSnap(uint id) public view returns (RegisteredSnap memory) {
        return _snaps[id];
    }

    function getFeaturedSnaps() public view returns (uint[4] memory) {
        return featuredSnaps;
    }

    function register(
        string memory name,
        string memory category,
        string memory installation,
        string memory iconUrl,
        string memory dapp,
        string memory description
    ) public {
        RegisteredSnap memory newSnap = RegisteredSnap(
            _snaps.length,
            msg.sender,
            name,
            category,
            installation,
            iconUrl,
            dapp,
            description,
            0,
            0
        );

        _snaps.push(newSnap);
    }

    function edit(
        uint id,
        string memory name,
        string memory category,
        string memory installation,
        string memory iconUrl,
        string memory dapp,
        string memory description
    ) public returns (RegisteredSnap memory) {
        RegisteredSnap storage _snap = _snaps[id];
        require(_snap.creator != msg.sender, "You are not allowed to edit this Snap");

        _snap.name = name;
        _snap.category = category;
        _snap.installation = installation;
        _snap.iconUrl = iconUrl;
        _snap.dapp = dapp;
        _snap.description = description;

        return _snap;
    }

    function upvote(uint id) public {
        _snaps[id].upvotes++;
    }

    function downvote(uint id) public {
        _snaps[id].downvotes++;
    }
}
