import React, { Component, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import css

class NavBar extends Component {
  render() {
    return (
      <nav>
        
        <NavLink exact to="/" activeClassName="selected" />
        <NavLink exact to="/about" activeClassName="selected" />
        <NavLink exact to="/projects" activeClassName="selected" />
        <NavLink exact to="/contact" activeClassName="selected" />
      </nav>
    );
  }
}

export default NavBar;