import React from 'react';
import ReactDOM from 'react-dom';


class Greeting extends React.Component {
  render() {
    return <div class="greeting">Hello { this.props.name }</div>;
  }
}

ReactDOM.render(
  <Greeting name="Jane" />,
  document.getElementById('greeting-container')
);
