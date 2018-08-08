import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContent extends Component {
  state = {
    marker: [],
    markers: [],
    newmarkers: []
  };

  render() {
    let marker = {};
    let newmarkers = [];
    const markers = this.props.filteredLocations.map(marker => (
      <Marker
        key={marker.key}
        name={marker.title}
        position={{ lat: marker.location.lat, lng: marker.location.lng }}
        onClick={this.props.onMarkerClick}
      />
    ));

    newmarkers.push(markers);
    console.log(markers);

    /*console.log(markers[1].key);
    console.log(this.props.locations[2].key);

    if (markers.key === this.props.filteredLocations.key) {
      console.log(true);
    } else {
      console.log(false);
    }*/

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 47.322047,
            lng: 5.04148
          }}
          onClick={this.props.onMapClicked}
        >
          {markers}

          <InfoWindow
            key={marker.key}
            marker={this.props.activeMarker}
            onOpen={this.windowHasOpened}
            onClose={this.windowHasClosed}
            visible={this.props.showingInfoWindow}
          >
            <div>
              <h3 className="App-Title-InfoWindow">
                {this.props.selectedPlace.name}
              </h3>
              <p>Details:</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAnAjwwoEN3ySjRoMvE5664Jw-SpMYBRiY"
})(MapContent);
