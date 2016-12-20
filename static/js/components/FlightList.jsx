import React from 'react';
import { Flight } from './Flight.jsx';


export function FlightList (props) {
  var flightElements = [];

  for (var i=0; i<props.flights.length; i++) {
    flightElements.push(
      <Flight from={ props.flights[i].from } to={ props.flights[i].to } stops={ props.flights[i].stops } />
    );
  };

  return (
    <div class="list-group">
      { flightElements }
    </div>
  )
}
