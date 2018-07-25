import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContent extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

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
      <div>
        <Map
          google={this.props.google}
          zoom={13}
          initialCenter={{
            lat: 47.322047,
            lng: 5.04148
          }}
        >
          {this.props.locations.map((marker, ind) => (
            <Marker
              key={marker.id}
              name={marker.title}
              position={{ lat: marker.location.lat, lng: marker.location.lng }}
              onClick={this.onMarkerClick}
            />
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            onOpen={this.windowHasOpened}
            onClose={this.windowHasClosed}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h3 className="App-Title-InfoWindow">
                {this.state.selectedPlace.name}
              </h3>
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
