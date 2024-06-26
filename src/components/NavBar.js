import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Registrar</Link>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
