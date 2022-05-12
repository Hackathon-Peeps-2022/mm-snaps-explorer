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
      <MenuLink link="/" name="Categories" icon={categories}></MenuLink>
      <div style={{ position: "relative", left: "10px" }}>
        <MenuLink link="/a" name="NFTs" icon={nft}></MenuLink>
        <MenuLink link="/b" name="Best Rated" icon={iconStars}></MenuLink>
        <MenuLink link="/c" name="Utilities" icon={box}></MenuLink>
        <MenuLink link="/d" name="Protocols" icon={protocols}></MenuLink>
      </div>
      <MenuLink link="test" name="Test All Snaps" icon={categories}></MenuLink>
      <div style={{ position: "relative", left: "10px" }}>
        <FilterLink category="coin" name="Filter 1" icon={nft}></FilterLink>
        <FilterLink
          category="utility"
          name="Filter 2"
          icon={iconStars}
        ></FilterLink>
      </div>
    </nav>
  );
};

export default Nav;
