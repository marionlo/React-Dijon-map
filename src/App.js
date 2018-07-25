import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import MapContent from "./components/Map.js";
import LocationsList from "./components/LocationsList.js";
import "./App.css";

class App extends Component {
  state = {
    locations: [
      {
        title: "Halles du marché",
        location: { lat: 47.3237863, lng: 5.0399184 }
      },
      {
        title: "Église Saint-Étienne",
        location: { lat: 47.3211217, lng: 5.0449197 }
      },
      {
        title: "Hôtel de Vogüé",
        location: { lat: 47.3226771, lng: 5.0421956 }
      },
      {
        title: "Église Notre-Dame de Dijon",
        location: { lat: 47.3227477, lng: 5.0412288 }
      },
      {
        title: "Jardin Darcy",
        location: { lat: 47.3243954, lng: 5.0319993 }
      },
      {
        title: "Porte Guillaume",
        location: { lat: 47.3232856, lng: 5.0347209 }
      },
      {
        title: "Palais des ducs de Bourgogne",
        location: { lat: 47.321427, lng: 5.0423652 }
      },
      {
        title: "Jardin botanique de l'Arquebuse",
        location: { lat: 47.3212274, lng: 5.0276789 }
      },
      {
        title: "Église Saint-Michel",
        location: { lat: 47.3211217, lng: 5.0449197 }
      },
      {
        title: "Musée de la vie bourguignonne Perrin de Puycousin",
        location: { lat: 47.3174169, lng: 5.0376904 }
      }
    ],

    marker: []
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Wrapper">
          <LocationsList />
          <div role="application" ref="map">
            <MapContent
              locations={this.state.locations}
              marker={this.state.marker}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
