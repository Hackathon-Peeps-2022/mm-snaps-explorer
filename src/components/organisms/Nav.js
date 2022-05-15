import React from "react";

import SearchBar from "../molecules/SearchBar";

import MenuLink from "../atoms/MenuLink";

import categories from "../../assets/categories.svg";
import nft from "../../assets/nft.svg";
import iconStars from "../../assets/icon_stars.svg";
import box from "../../assets/box.svg";
import protocols from "../../assets/protocols.svg";
import FilterLink from "../atoms/FilterLink";

const Nav = () => {
  return (
    <nav>
      <SearchBar />
      <MenuLink link="/" name="Categories" icon={categories} />
      <div style={{ position: "relative", left: "10px" }}>
        <FilterLink category="nfts" name="NFTs" icon={nft} />
        <MenuLink link="/b" name="Best Rated" icon={iconStars} />
        <FilterLink category="utility" name="Utilities" icon={box} />
        <FilterLink category="protocol" name="Protocols" icon={protocols} />
      </div>
    </nav>
  );
};

export default Nav;
