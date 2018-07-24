import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContent extends Component {
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
          {this.props.locations.map((marker, index) => (
            <Marker
              key={marker.id}
              animation={marker.defaultAnimation}
              name={marker.name}
              address={marker.location.address}
              position={{ lat: marker.location.lat, lng: marker.location.lng }}
              onClick={e => {
                this.onMarkerClick(marker.id);
              }}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAnAjwwoEN3ySjRoMvE5664Jw-SpMYBRiY"
})(MapContent);
