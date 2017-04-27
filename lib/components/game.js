import React from 'react';

import Cell from './cell';
import Board from './board';
import Fleet from './fleet';
import OwnBoard from './ownBoard';

export default class Game extends React.Component {
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

  render () {
    return (
      <div>
        <div style={{width:'50%', display:'inline-block'}}>
          You
          <OwnBoard />
          Your Fleet
          <Fleet fleet={this.state.fleet}/>
          Your Ghastly Enemy
          <Board />
        </div>
        <div style={{width:'50%', display:'inline-block'}}>
          Enemy
          <OwnBoard />
          Enemy Fleet
          <Fleet fleet={this.state.fleet}/>
          Ghastly You
          <Board />
        </div>
      </div>
    );
  }
}
