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
        ],
        currentShip: [],
        P1Map: Array(100).fill(['~', ' ']),
        P2Map: Array(100).fill(Array(2).fill(' '))
    };

    this.handleClick = this.handleClick.bind(this);
    this.ownHandleClick = this.ownHandleClick.bind(this);
    this.handleFleetClick = this.handleFleetClick.bind(this);
  }

  handleClick(i) {
    let changer = this.state.P1Map
    let reveal = changer[i][0]
    changer[i] = [reveal, reveal]
    this.setState({
      allStatuses: changer
    })
  }

  ownHandleClick(i) {
    let changer = this.state.P1Map
    let current = this.state.currentShip
      if (current[2] > 0) {
        current[2] -= 1
        for (let x=0; x < current[1]; x++) {
          changer[i + x] = ['B', ' ']
        }
      }

    this.setState({
      P1Map: changer
    })
  }

  handleFleetClick(ship) {
      this.setState({
        currentShip: ship
      })
  }

  render () {
    return (
      <div>
        <div id='P1' style={{width:'50%', display:'inline-block'}}>
          You (P1)
          <OwnBoard playermap={this.state.P1Map} onBoardClick={(i) => this.ownHandleClick(i)} />
          Your Fleet
          <Fleet fleet={this.state.fleet} onFleetClick={(ship) => this.handleFleetClick(ship)}/>
          Your Ghastly Enemy
          <Board playermap={this.state.P2Map}/>
        </div>
        <div id='P2' style={{width:'50%', display:'inline-block'}}>
          Enemy (P2)
          <OwnBoard playermap={this.state.P2Map}/>
          Enemy Fleet
          <Fleet fleet={this.state.fleet}/>
          Ghastly You
          <Board playermap={this.state.P1Map} onBoardClick={(i) => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}
