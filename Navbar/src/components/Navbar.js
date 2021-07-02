import React from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  let history = useHistory();
  return (
    <Router>
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn" >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </label>

        <label className="navbar__logo" onClick={() => history.push("/")}>Navbar</label>

        <ul>
          <li>
            <Link className="navLink active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/feedback">
              Feedback
            </Link>
          </li>
        </ul>

        {/* <section></section> */}
      </nav>
    </Router>
  );
}

export default Navbar;
