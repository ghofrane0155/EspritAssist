import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#990000", padding: "15px 20px" }}>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "#fff", margin: 0 }}>EspritAssist</h1>
        </Link>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
          <li>
            <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Mobility" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              Mobility
            </Link>
          </li>
          <li>
            <Link to="/Employability" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              Employability
            </Link>
          </li>
          <li>
            <Link to="/Contact" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              Contact
            </Link>
          </li>
          {/* You can add more menu items here if needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
