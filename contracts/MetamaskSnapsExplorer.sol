// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

contract MetamaskSnapsExplorer {
    struct RegisteredSnap {
        uint id;
        address creator;
        string name;
        string githubLink;
        string npmPackageLink;
        string version;
        string imageURI;
        string metadataURI;
        uint upvotes;
        uint downvotes;
    }

    RegisteredSnap[] _snaps;

    function getNumberOfSnaps() public view returns (uint) {
        return _snaps.length;
    }

    function getSnap(uint id) public view returns (RegisteredSnap memory) {
        return _snaps[id];
    }

    function register(
        string memory name,
        string memory githubLink,
        string memory npmPackageLink,
        string memory version,
        string memory imageURI,
        string memory metadataURI
    ) public {
        RegisteredSnap memory newSnap = RegisteredSnap(
            _snaps.length,
            msg.sender,
            name,
            githubLink,
            npmPackageLink,
            version,
            imageURI,
            metadataURI,
            0,
            0
        );

        _snaps.push(newSnap);
    }

    function edit(
        uint id,
        string memory name,
        string memory githubLink,
        string memory npmPackageLink,
        string memory version,
        string memory imageURI,
        string memory metadataURI
    ) public returns (RegisteredSnap memory) {
        RegisteredSnap storage _snap = _snaps[id];
        require(_snap.creator != msg.sender, "You are not allowed to edit this Snap");

        _snap.name = name;
        _snap.githubLink = githubLink;
        _snap.npmPackageLink = npmPackageLink;
        _snap.version = version;
        _snap.imageURI = imageURI;
        _snap.metadataURI = metadataURI;

        return _snap;
    }

    function upvote(uint id) public {
        _snaps[id].upvotes++;
    }

    function downvote(uint id) public {
        _snaps[id].downvotes++;
    }
}
