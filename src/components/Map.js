import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContent extends Component {
  state = {
    marker: [],
    markers: [],
    newmarkers: []
  };

  constructor(props) {
    super(props);
    this.count = true;
  }

  componentDidUpdate(prevProps) {
    this.count = true;
    let search = this.props.selectedPlace.name;
    console.log("count = " + this.count);
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5fbf4edfc2e62e88f19e1e2021ac937a" +
        "&content_type=1&per_page=1&text=" +
        search +
        "&sort=relevance&format=json&nojsoncallback=1"
    )
      .then(function(response) {
        return response.json();
      })
      .then(
        function(j) {
          let picArray = j.photos.photo.map(pic => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";
            return <img alt={pic.title} src={srcPath} />;
          });
          if (this.count) {
            this.setState({ pictures: picArray });
            this.count = false;
          }
        }.bind(this)
      );
  }

  render() {
    let marker = {};
    const markers = this.props.filteredLocations.map(marker => (
      <Marker
        key={marker.key}
        name={marker.title}
        position={{ lat: marker.location.lat, lng: marker.location.lng }}
        onClick={this.props.onMarkerClick}
      />
    ));

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
            <div className="App-Infowindow">
              <h3 className="App-Title-InfoWindow">
                {this.props.selectedPlace.name}
              </h3>
              <h4>Pictures:</h4>
              <p className="App-Picture"> {this.state.pictures}</p>
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
