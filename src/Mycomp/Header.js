import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* below way to put Title make the Title change automatically whenever we will change props  */}
        <a className="navbar-brand" href="/"> 
          {props.title}   
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Below line ensure that SignUp Option will be availabe only if No any User is logged in */}
            {!props.isUserloggedin && (
              <button className="btn btn-outline-success mx-2" type="submit">
                <li>
                  <Link to="/SignUp">SignUp</Link>
                </li>
              </button>
            )}
            {/* Below line ensure that Signout Option will be availabe only if User is logged in */}
            {props.isUserloggedin && (
              <button
                className="btn btn-outline-success mx-2"
                type="submit"
                onClick={props.signOutUser}
              >
                SignOut
              </button>
            )}
            {/* Below line ensure that Addtodo Option will be availabe only if User is logged in */}
            {props.isUserloggedin && (
              <button className="btn btn-outline-success mx-2" type="submit">
                <li>
                  <Link to="./addtodo">Addtodo</Link>
                </li>
              </button>
            )}
              {/* Below line ensure that Welcome text with Username will be visible only if User is logged in */}
            <li>
              {props.isUserloggedin && (
                <h6 className="my-2">Welcome {props.Username}</h6>
              )}
            </li>
            {/* Below line ensure that Login Option will be availabe only if No any User is logged in */}
            {!props.isUserloggedin && (
              <button className="btn btn-outline-success" type="submit">
                <li>
                  <Link to="./login">login</Link>
                </li>
              </button>
            )}
          </ul>
          {/* Below line ensure that Search Option will be availabe only if User is logged in */}
          {props.isUserloggedin && (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                onChange={(e) => props.search(e.target.value)}
                type="search"
                placeholder="Filter Your Task"
                aria-label="Search"
              />
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

header.defaultprop = {
  title: "put your Title here",
};

header.propTypes = {
  title: propTypes.string,  //proptype defined
};
