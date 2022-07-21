import Heading from "../../Header/Heading";
import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <Link className="navbar-brand" to="/">
          <Heading />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active  nav__link">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/treading">
                Treading
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/all-movies">
                Movies
              </Link>
            </li>
            <li className="nav-item nav__link">
              <Link className="nav-link" to="/all-series">
                TvSeries
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/not">
                Search
              </Link>
            </li> */}
          </ul>

          <div className="all__right">
            <div className="btn-login">
              <Link to="/login">
                <button className=" login-btn">login</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
