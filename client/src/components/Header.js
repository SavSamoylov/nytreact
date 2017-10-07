import React from "react";
import "./Header.css"


class Header extends React.Component {
  render() {
    return (
      <nav className="navigation navbar navbar-dark bg-primary">
        <h4>New York Times React App</h4>
        <nav className="nav">
          <a className="nav-link " href="/">Search</a>
          <a className="nav-link" href="/favorites">Favorites</a>
        </nav>
      </nav>
    )
  }
}

export default Header;
