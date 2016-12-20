import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { FlightList } from './components/FlightList.jsx';


var flights = [];
var flightsContainer = document.getElementById('flights-container');

function renderFlights(flights) {
  console.time('render');
  var innerHTML = '<div class="list-group">';
  var i;
  var flight;

  for (i=0; i<flights.length; i++) {
    flight = flights[i];
    innerHTML += '<div class="list-group-item flight">';
    innerHTML += '<h4>Flight from ' + flight.from + ' to ' + flight.to + ' </h4>';
    innerHTML += '<p>';
    if (!flight.stops) {
      innerHTML += 'Direct flight';
    } else if (flight.stops == 1) {
      innerHTML += '1 stop';
    } else {
      innerHTML += (flight.stops + ' stops');
    }
    innerHTML += '</p>';
    innerHTML += '</div>'
  }

  innerHTML += '</div>';
  flightsContainer.innerHTML = innerHTML;
  console.log(flightsContainer);
  window.asdasd = innerHTML;
  console.timeEnd('render');
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
