import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div>
      <nav className="nav flex-column">
        <Link className="nav-link active" to="/About">
          Bio
        </Link>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            to="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Portfolio
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/Design">
              Projects
            </Link>
          </div>
        </li>
        <Link className="nav-link" to="/Contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
