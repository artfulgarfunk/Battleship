import React from 'react';
import Cell from './cell';

export default class Fleet extends React.Component {
  constructor() {
    super();
    this.state = {
        carrier: 5
    };
  }

  renderShip(length) {
    let arr = []
    for (let x=0; x < length; x ++) {
        arr.push(<Cell status="B" />)
      }
    return <div> {arr} </div>;
  }

  render () {
    let x = this.renderShip(this.state.carrier)
    return (
      <div>
        {x}
      </div>
   );
  }
};
