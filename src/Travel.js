import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.destination} />
    <figcaption>
    <h2>{props.destination}</h2>
    <h3>{props.country}</h3>
    <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default Travel;