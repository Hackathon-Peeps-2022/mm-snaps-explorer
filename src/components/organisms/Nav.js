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
        <MenuLink link="/a" name="NFTs" icon={nft} />
        <MenuLink link="/b" name="Best Rated" icon={iconStars} />
        <MenuLink link="/c" name="Utilities" icon={box} />
        <MenuLink link="/d" name="Protocols" icon={protocols} />
      </div>
      <MenuLink link="test" name="Test All Snaps" icon={categories} />
      <div style={{ position: "relative", left: "10px" }}>
        <FilterLink category="protocol" name="Filter 1" icon={nft} />
        <FilterLink category="utility" name="Filter 2" icon={iconStars} />
      </div>
    </nav>
  );
};

export default Nav;
