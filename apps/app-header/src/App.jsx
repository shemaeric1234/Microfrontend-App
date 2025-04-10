import React from "react";
import { log } from "../../../shared/utils/logger";

const Header = () => {
  log("Header component loaded");
  return (
    <header style={{ background: "#282c34", color: "#fff", padding: "10px" }}>
      <h1>App Header</h1>
    </header>
  );
};

export default Header;
