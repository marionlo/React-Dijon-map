import React, { Component } from "react";
import { Glyphicon, Button } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Button className="App-Menu-icon">
          <Glyphicon glyph="menu-hamburger" aria-label="Toggle Side Panel" />
        </Button>
        <h1 className="App-title">10 beautiful places to see in Dijon</h1>
      </header>
    );
  }
}

export default Header;
