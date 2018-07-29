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
          <ul className="App-List-Locations">
            <li>{location.title}</li>
          </ul>
        ))}
      </section>
    );
  }
}

export default LocationsList;
