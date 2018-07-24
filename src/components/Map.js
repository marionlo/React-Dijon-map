import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContent extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{
          lat: 47.322047,
          lng: 5.04148
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAnAjwwoEN3ySjRoMvE5664Jw-SpMYBRiY"
})(MapContent);
