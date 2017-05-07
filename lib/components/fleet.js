import React from 'react';

import Cell from './cell';

export default class Fleet extends React.Component {
  renderShip(ship) {
    let arr = []
    for (let x = 0; x < ship[1]; x ++) {
        arr.push(<Cell status="B" onClick={() => this.props.onFleetClick(ship)}/>)
      }
    return <div> {arr} </div>;
  }

  render () {
    let line = [];
    let thisFleet = this.props.fleet
    thisFleet.forEach((ship) => {
      for (let i = 1; i <= ship[2]; i++) {
        line.push(this.renderShip(ship))
      }
    })
    return (
      <div>
        {line}
      </div>
   );
  }
};
