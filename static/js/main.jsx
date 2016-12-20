import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { FlightList } from './components/FlightList.jsx';


var flights = [];
var flightsContainer = document.getElementById('flights-container');

function renderFlights(flights) {
  ReactDOM.render(
    <FlightList flights={ flights } />,
    flightsContainer
  );
}

$('#filter').click(function () {
  var fromAirport = $('#from').val();
  var toAirport = $('#to').val();
  var stops = parseInt($('#stops').val());

  var filteredFlights = flights.filter(function (flight) {
    if (fromAirport && (fromAirport != flight.from)) {
      return false;
    }

    if (toAirport && (toAirport != flight.to)) {
      return false;
    }

    if (stops && (stops != flight.stops)) {
      return false;
    }

    return true;
  });

  renderFlights(filteredFlights);
});

$('#reset').click(function () {
  renderFlights(flights);
})

$.get('/flights/').done(function (data) {
  flights = data;
  renderFlights(flights);
});
