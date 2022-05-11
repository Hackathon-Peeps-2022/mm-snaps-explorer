import React from "react";

import SearchBar from "../molecules/SearchBar";

import MenuLink from "../atoms/MenuLink";

import categories from "../../assets/categories.svg";
import nft from "../../assets/nft.svg";
import iconStars from "../../assets/icon_stars.svg";
import box from "../../assets/box.svg";
import protocols from "../../assets/protocols.svg";

const Nav = () => {
  return (
    <nav>
      <SearchBar />
      <MenuLink link="/" name="Categories" icon={categories}></MenuLink>
      <div style={{ position: "relative", left: "20px" }}>
        <MenuLink link="/:nfts" name="NFTs" icon={nft}></MenuLink>
        <MenuLink link="/:best" name="Best Rated" icon={iconStars}></MenuLink>
        <MenuLink link="/:best" name="Utilities" icon={box}></MenuLink>
        <MenuLink link="/:best" name="Protocols" icon={protocols}></MenuLink>
      </div>
      <MenuLink link="test" name="Test" icon={categories}></MenuLink>
    </nav>
  );
};

export default Nav;
