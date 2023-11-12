import React from "react";
import "./index.css";
import DashtoonRoutes from "./DashtoonRoutes.js";
import { Link } from "react-router-dom";
const Navbar = ({panels}) => {
  return (
    <div className="navWrapper">
      <div className="navLogo">
        Lexi
        <span style={{ color: "#0096FF",padding:"0" }} className="navLogo">
          Comic
        </span>
        raft
      </div>
      <div className="navLinks">
        {DashtoonRoutes.map((route, key) => {
          return (
            <div
              className={
                window.location.pathname === "/" + route.linkTo
                  ? "navLink activeLink"
                  : "navLink"
              }
            >
              <Link className={
                window.location.pathname === "/" + route.linkTo
                  ? "navLink activeLink"
                  : "navLink"
              } to={route.linkTo}>
              {route.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
