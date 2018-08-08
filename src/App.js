import React, { Component } from "react";
import Header from "./components/Header.js";
import MapContent from "./components/Map.js";
import LocationsList from "./components/LocationsList.js";
import "./App.css";

class App extends Component {
  /*componentDidMount() {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5fbf4edfc2e62e88f19e1e2021ac937a&tags=nyc&per_page=10&page=1&format=json&nojsoncallback=1"
    ).then(function(response) {
      return response.json();
    });
  } */
  constructor() {
    super();
    this.onFilterLocations = this.onFilterLocations.bind(this);
  }

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

    marker: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: [],
    filteredLocations: []
  };
  onFilterLocations(newLocations) {
    console.log("test filter");
    this.setState({
      filteredLocations: newLocations
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

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Wrapper">
          <LocationsList
            selectedPlace={this.state.selectedPlace}
            locations={this.state.locations}
            activeMarker={this.state.activeMarker}
            marker={this.state.marker}
            onFilterLocations={this.onFilterLocations}
          />
          <div role="application" ref="map">
            <MapContent
              locations={this.state.locations}
              showingInfoWindow={this.state.showingInfoWindow}
              activeMarker={this.state.activeMarker}
              selectedPlace={this.state.selectedPlace}
              onMarkerClick={this.onMarkerClick}
              onMapClicked={this.onMapClicked}
              filteredLocations={this.state.filteredLocations}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
