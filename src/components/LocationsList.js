import React, { Component } from "react";

class LocationsList extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredLocations = this.props.locations.filter(location => {
      return (
        location.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
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
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </label>
        </form>
        {filteredLocations.map(location => (
          <ul className="App-List-Locations">
            <li key={location.id}>{location.title}</li>
          </ul>
        ))}
      </section>
    );
  }
}

export default LocationsList;
