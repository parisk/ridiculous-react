import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './greetings.jsx';


ReactDOM.render(
  <Greeting name="Jane" />,
  document.getElementById('greeting-container')
);
