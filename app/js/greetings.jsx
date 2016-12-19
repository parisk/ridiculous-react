import React from 'react';


export class Greeting extends React.Component {
  render() {
    return <div class="greeting">Hello { this.props.name }</div>;
  }
}
