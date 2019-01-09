import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

// import css

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <header>
          <NavBar />
        </header>
        <div className="home">
          <h1>Home</h1>1
        </div>
      </div>
    );
  }
}

export default Home;
