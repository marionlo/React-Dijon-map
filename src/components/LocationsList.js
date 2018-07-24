import React, { Component } from "react";

class LocationsList extends Component {
  render() {
    return (
      <section className="App-Sidebar">
        <h2>Filter your locations to show it on the map</h2>
        <form>
          <label>
            Filter:
            <input
              type="text"
              name="locations"
              value="Choose your location"
              //onChange=function()
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default LocationsList;
