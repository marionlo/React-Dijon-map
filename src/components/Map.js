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
          onClick={this.props.onMapClicked}
        >
          {this.props.locations.map((marker, ind) => (
            <Marker
              key={marker.id}
              name={marker.title}
              animation={google.maps.Animation.DROP}
              position={{ lat: marker.location.lat, lng: marker.location.lng }}
              onClick={this.props.onMarkerClick}
            />
          ))}

          <InfoWindow
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
