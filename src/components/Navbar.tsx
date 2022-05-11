import React, { useContext } from "react";
import { UserContext } from "../app/context";

const Navbar = () => {
  const context = useContext(UserContext);
  return <div>Navbar</div>;
};

export default Navbar;
