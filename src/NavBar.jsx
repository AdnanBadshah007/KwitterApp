import React from "react";
import { Link } from "react-router-dom";

export let NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/allpost">
                  All Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newpost ">
                  New Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
