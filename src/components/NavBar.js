import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Registrar</Link>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        {authState.isAuthenticated && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
