import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container } from "@mui/material";

export default class GlobalNav extends Component {
  render() {
    return (
      <nav className="gnb">
        <Container maxWidth="1860" className="wrap">
          <h1>logo</h1>
          <Router>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Router>
        </Container>
      </nav>
    );
  }
}
