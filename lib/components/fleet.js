import React from 'react';

import Cell from './cell';

export default class Fleet extends React.Component {
  constructor() {
    super();
    this.state = {
        fleet: [
        ['carrier',5,1],
        ['battleship',4,1],
        ['cruiser',3,2],
        ['destroyer',2,2],
        ['submarine',1,2]
      ]
    };
  }

  renderShip(ship) {
    let arr = []
    for (let x=0; x < ship[1]; x ++) {
        arr.push(<Cell status="B" onClick={() => this.handleClick(x)}/>)
      }
    return <div> {arr} </div>;
  }

  render () {
    var x = [];
    var changer = this.state.fleet
    changer.forEach((ship) => {
      for (let i=1; i <= ship[2]; i ++) {
        x.push(this.renderShip(ship))
      }
    })
    return (
      <div>
        {x}
      </div>
   );
  }
};
