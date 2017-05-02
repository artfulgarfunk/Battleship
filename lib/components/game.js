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

  surroundCheck(i, ship, mapp) {
    let row = Math.floor(i/10)
    let rowEnd = Math.ceil((i + 1)/10) * 10
    let rowPlace = i - row*10
    let status = true
    if (i + ship[1] > rowEnd) status = false
    for (let j = rowPlace - 1; j < rowPlace + ship[1] + 1; j++) {
      for (let k = row - 1; k < row + 2; k++) {
        if (k < 0) k = 0
        if (k > 9) break
        let checker = k*10 + j
        if (checker < 0) checker = 0
        if (checker > 99) break
        if (mapp[checker][0] != '~') {
          status = false
        }
      }
    }
    return status
  }

  ownHandleClick(i) {
    let changer = this.state.P1Map
    let current = this.state.currentShip
    let fleet = this.state.fleet
    if (current[2] > 0 && this.surroundCheck(i, current, changer)) {
      fleet.forEach ((ship) => {
        if (ship[0] == current[0]) {
          ship[2] -= 1
        }
      })

      for (let x=0; x < current[1]; x++) {
        changer[i + x] = ['B', ' ']
      }
    }

    this.setState({
      P1Map: changer,
      fleet: fleet
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
