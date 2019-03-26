import React, { Component } from "react";

class Travel extends Component {
  render() {
    const { photo, destination, country, distance } = this.props;
    return (
      <div className="Travel">
        <figure>
          <img src={photo} alt={destination} />
          <figcaption>
            <h2>{destination}</h2>
            <h3>{country}</h3>
            <p>{distance}</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default Travel;