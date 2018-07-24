import React, { Component } from "react";
import { Glyphicon, Button } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-nav-left">
          <Button>
            <Glyphicon
              glyph="hamburger-menu"
              className="App-Menu-Icon"
              aria-label="Toggle Side Panel"
            />
          </Button>
        </div>
        <div className="App-nav-right">
          <h1 className="App-title">10 beautiful places to see in Dijon</h1>
        </div>
      </header>
    );
  }
}

export default Header;
