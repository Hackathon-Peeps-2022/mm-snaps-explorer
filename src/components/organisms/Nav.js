import React from "react";

import SearchBar from "../molecules/SearchBar";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <SearchBar />
      <Link to="/">Main</Link>
      <Link to="test">Test</Link>
    </nav>
  );
};

export default Nav;
