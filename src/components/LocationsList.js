import React, { Component } from "react";

class LocationsList extends Component {
  render() {
    return (
      <section className="App-Sidebar">
        <h2 className="App-Title-Filter">
          Filter your locations to show it on the map
        </h2>
        <form>
          <label>
            Filter:
            <input
              type="text"
              name="locations"
              //value="Choose your location"
              //onChange=function()
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.props.locations.map((location, index) => (
          <li>{this.props.locations.title}</li>
        ))}
      </section>
    );
  }
}

export default LocationsList;
