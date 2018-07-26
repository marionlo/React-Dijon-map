import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import MapContent from "./components/Map.js";
import LocationsList from "./components/LocationsList.js";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5fbf4edfc2e62e88f19e1e2021ac937a&tags=nyc&per_page=10&page=1&format=json&nojsoncallback=1"
    ).then(function(response) {
      return response.json();
    });
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  state = {
    locations: [
      {
        title: "Halles du marché",
        location: { lat: 47.3237863, lng: 5.0399184 },
        key: "halles"
      },
      {
        title: "Église Saint-Étienne",
        location: { lat: 47.3211217, lng: 5.0449197 },
        key: "etienne"
      },
      {
        title: "Hôtel de Vogüé",
        location: { lat: 47.3226771, lng: 5.0421956 },
        key: "vogue"
      },
      {
        title: "Église Notre-Dame de Dijon",
        location: { lat: 47.3227477, lng: 5.0412288 },
        key: "notredame"
      },
      {
        title: "Jardin Darcy",
        location: { lat: 47.3243954, lng: 5.0319993 },
        key: "darcy"
      },
      {
        title: "Porte Guillaume",
        location: { lat: 47.3232856, lng: 5.0347209 },
        key: "guillaume"
      },
      {
        title: "Palais des ducs de Bourgogne",
        location: { lat: 47.321427, lng: 5.0423652 },
        key: "palais"
      },
      {
        title: "Jardin botanique de l'Arquebuse",
        location: { lat: 47.3212274, lng: 5.0276789 },
        key: "Arquebuse"
      },
      {
        title: "Église Saint-Michel",
        location: { lat: 47.3211217, lng: 5.0449197 },
        key: "michel"
      },
      {
        title: "Musée de la vie bourguignonne Perrin de Puycousin",
        location: { lat: 47.3174169, lng: 5.0376904 },
        key: "musee"
      }
    ],

    marker: []
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Wrapper">
          <LocationsList locations={this.state.locations} />
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
