import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { FlightList } from './components/FlightList.jsx';


var flights = [
  {
    "from": "ATH",
    "to": "LHR",
    "stops": 1
  },
  {
    "from": "ATH",
    "to": "LHR",
    "stops": 2
  },
  {
    "from": "ATH",
    "to": "LHR",
    "stops": 0
  },
  {
    "from": "LHR",
    "to": "ATH",
    "stops": 2
  },
  {
    "from": "LHR",
    "to": "ATH",
    "stops": 0
  },
  {
    "from": "LHR",
    "to": "ATH",
    "stops": 1
  },
  {
    "from": "ATH",
    "to": "STN",
    "stops": 0
  },
  {
    "from": "ATH",
    "to": "STN",
    "stops": 1
  },
  {
    "from": "ATH",
    "to": "STN",
    "stops": 2
  },
  {
    "from": "STN",
    "to": "ATH",
    "stops": 0
  },
  {
    "from": "STN",
    "to": "ATH",
    "stops": 1
  },
  {
    "from": "STN",
    "to": "ATH",
    "stops": 2
  },
  {
    "from": "ATH",
    "to": "SFO",
    "stops": 1
  },
  {
    "from": "ATH",
    "to": "SFO",
    "stops": 2
  },
  {
    "from": "SFO",
    "to": "ATH",
    "stops": 1
  },
  {
    "from": "SFO",
    "to": "ATH",
    "stops": 2
  },
  {
    "from": "JFK",
    "to": "ATH",
    "stops": 0
  },
  {
    "from": "JFK",
    "to": "ATH",
    "stops": 1
  },
  {
    "from": "JFK",
    "to": "ATH",
    "stops": 2
  },
  {
    "from": "ATH",
    "to": "JFK",
    "stops": 0
  },
  {
    "from": "ATH",
    "to": "JFK",
    "stops": 1
  },
  {
    "from": "ATH",
    "to": "JFK",
    "stops": 2
  },
  {
    "from": "ATH",
    "to": "IKA",
    "stops": 1
  },
  {
    "from": "ATH",
    "to": "IKA",
    "stops": 2
  },
  {
    "from": "IKA",
    "to": "ATH",
    "stops": 1
  }
];

ReactDOM.render(
  <FlightList flights={ flights } />,
  document.getElementById('flights-container')
);
