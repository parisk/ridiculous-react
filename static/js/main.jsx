import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


var flightsContainer = document.getElementById('flights-container');
var flights;


function FlightComponent(props) {
  // props.from, props.to, props.stops
  return <div className="list-group-item">From {props.from} to {props.to} with {props.stops} stops</div>;
}

function FlightListComponent(props) {
  var flightComponents = props.flights.map(function (flight) {
    return <FlightComponent from={flight.from} to={flight.to} stops={flight.stops} />
  });
  return <div className="list-group">{ flightComponents }</div>
}

$.get('/flights/').done(function (flightList) {
  flights = flightList;
  ReactDOM.render(
    <FlightListComponent flights={ flightList } />,
    flightsContainer
  );
});

$('#filter').click(function () {
  var filteredFlightList = [],
      fromAirport = $('#from').val(),
      currentFlight;

  if (fromAirport) {
    for (var i=0; i<flights.length; i++) {
      currentFlight = flights[i];
      if (fromAirport == currentFlight.from) {
        filteredFlightList.push(currentFlight);
      }
    }
  }

  var filteredFlightListComponent = <FlightListComponent flights={ filteredFlightList } />;

  ReactDOM.render(filteredFlightListComponent, flightsContainer);
});
