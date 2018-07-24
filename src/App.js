import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import Map from "./components/Map.js";
import LocationsList from "./components/LocationsList.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Wrapper">
          <LocationsList />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
