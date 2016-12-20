import React from 'react';


class FlightStops extends React.Component {
  render() {
    if (!this.props.stops) {
      return <p>Direct flight</p>;
    } else if (this.props.stops == 1) {
      return <p>1 stop</p>;
    } else {
      return <p>{ this.props.stops } stops</p>;
    }
  }
}

export class Flight extends React.Component {
  render() {
    return (
      <div className="list-group-item flight">
        <h4>Flight from { this.props.from } to { this.props.to }</h4>
        <FlightStops stops={ this.props.stops } />
      </div>
    );
  }
}
