import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 47.322047,
      lng: 5.04148
    },
    zoom: 12,
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyAnAjwwoEN3ySjRoMvE5664Jw-SpMYBRiY',
        }}
        defaultCenter={this.props.center}
       defaultZoom={this.props.zoom}
      >
      </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
