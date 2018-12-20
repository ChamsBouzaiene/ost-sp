import * as React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light  my-navbar">
        <Link className="navbar-brand" to="#">
          <img
            src="http://www.ost.com.tn/wp-content/uploads/ost-logo.png"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                about ost <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ost team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                application
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                partner
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
