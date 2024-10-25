import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Haider Ali' Logo" />
      </NavLink>
      <NavLinks />
    </header>
  );
};

export default Header;
