import React from 'react';


function FlightStops (props) {
  if (!props.stops) {
    return <p>Direct flight</p>;
  } else if (props.stops == 1) {
    return <p>1 stop</p>;
  } else {
    return <p>{ props.stops } stops</p>;
  }
}

function Flight (props) {
  return (
    <div className="list-group-item flight">
      <h4>Flight from { props.from } to { props.to }</h4>
      <FlightStops stops={ props.stops } />
    </div>
  );
}

export function FlightList (props) {
  var flightElements = props.flights.map(function (flight) {
    return <Flight from={ flight.from } to={ flight.to } stops={ flight.stops } />
  });

  return <div class="list-group">{ flightElements }</div>
}
