import React from "react";

import SearchBar from "../molecules/SearchBar";

import MenuLink from "../atoms/MenuLink";

import star from "../../assets/star.svg";

const Nav = () => {
  return (
    <nav>
      <SearchBar />
      <MenuLink link="/" name="Categories" icon={star}></MenuLink>
      <div style={{ position: "relative", left: "10px" }}>
        <MenuLink link="/nfts" name="NFTs" icon={star}></MenuLink>
      </div>
      <MenuLink link="test" name="Test" icon={star}></MenuLink>
      <div style={{ position: "relative", left: "10px" }}>
        <MenuLink link="/nfts" name="NFTs" icon={star}></MenuLink>
      </div>
    </nav>
  );
};

export default Nav;
