import React from 'react';

import Cell from './cell';
import Board from './board';
import Fleet from './fleet';
import OwnBoard from './ownBoard';
import Switch from './switch';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        P1Fleet: [
          ['carrier',5,1],
          ['battleship',4,1],
          ['cruiser',3,2],
          ['destroyer',2,2],
          ['submarine',1,2]
        ],
        P2Fleet: [
          ['carrier',5,1],
          ['battleship',4,1],
          ['cruiser',3,2],
          ['destroyer',2,2],
          ['submarine',1,2]
        ],
        horizontal: true,
        currentShip: [],
        currentPlayer: 1,
        P1Map: Array(100).fill(['~', ' ']),
        P2Map: Array(100).fill(['~', ' ']),
    };
  }

  standardFleet() {
    [
      ['carrier',5,1],
      ['battleship',4,1],
      ['cruiser',3,2],
      ['destroyer',2,2],
      ['submarine',1,2]
    ]
  }

  handleClick(i) {
    let changer = this.whichPlayerMap()
    let x = changer[i][0]
    changer[i] = [x,x]
    this.updateMapOnly(changer)
  }

  updateMapOnly(changer) {
    if (this.state.currentPlayer == 1) {
      this.setState({
        P1Map: changer,
      })
    } else {
      this.setState({
        P2Map: changer,
      })
    }
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
    this.state.horizontal ? this.horizontalPlace(i) : this.verticalPlace(i)
  }

  verticalPlace(i) {
    var changer = this.whichPlayerMap()
    var fleet = this.whichPlayerFleet()
    var current = this.state.currentShip
    var rotated = this.rotate(changer)
    var ri = this.rotateIndex(i)

    this.updateFleetAndMap(ri,current,rotated,fleet)
    let finalmap = this.rotate(this.rotate(this.rotate(rotated)))
    this.setFleetAndMap(finalmap, fleet)
  }

  horizontalPlace(i) {
    var changer = this.whichPlayerMap()
    var fleet = this.whichPlayerFleet()
    var current = this.state.currentShip
    this.updateFleetAndMap(i,current,changer,fleet)
    this.setFleetAndMap(changer, fleet)
  }

  updateFleetAndMap(i, currentShip, currentMap, currentFleet) {
  if (currentShip[2] > 0 && this.surroundCheck(i, currentShip, currentMap)) {
    currentFleet.forEach ((ship) => {
      if (ship[0] == currentShip[0]) ship[2] -= 1
    })
      this.cellChange(currentMap,i,currentShip)
  }
}

  cellChange(board,i,current) {
    for (var x=0; x < current[1]; x++) {
      board[i + x] = ['B', ' ']
    }
  }

  setFleetAndMap(mapp, fleet) {
    if (this.state.currentPlayer == 1) {
    this.setState({
              P1Map: mapp,
              P1Fleet: fleet
    })
  } else {
      this.setState({
                P2Map: mapp,
                P2Fleet: fleet
      })
    }
  }

  rotateIndex(i) {
    let row = Math.floor(i/10)
    let rowEnd = Math.ceil((i + 1)/10) * 10
    let rowPlace = i - row*10
    let x = (9-rowPlace) * 10 + row
    return x
  }

  rotate(board) {
    let rotated = Array(100)
    for (let i=0; i<10; i++) {
      for (let j=0; j<10; j++) {
        rotated[(9-i) * 10 + j] = board[i + 10 * j]
      }
    }
    return rotated
  }

  whichPlayerMap() {
  var x = ((this.state.currentPlayer == 1) ? (this.state.P1Map) : (this.state.P2Map))
  return x
}

  whichPlayerFleet() {
  var x = ((this.state.currentPlayer == 1) ? (this.state.P1Fleet) : (this.state.P2Fleet))
  return x
}

  handleFleetClick(ship) {
      this.setState({
        currentShip: ship,
      })
  }

  changeHorizontal(){
    this.setState((prevState) => {
      return {horizontal: !prevState.horizontal};
      // horizontal: !this.state.horizontal
    })
  }

  displayOrientation(){
    var x = (this.state.horizontal) ? 'horizontal' : 'vertical'
    return x
  }

  switchPlayer(){
    var p = (this.state.currentPlayer == 1) ? 2 : 1
    this.setState({
      currentPlayer: p
    })
  }

  disPlayer(){
    var p = (this.state.currentPlayer == 1) ? 'player juan' : 'player too'
    return p
  }

  render () {
    return (
      <div>
        <div id='P1' style={{width:'50%', display:'inline-block'}}>
          You (P1)
          <OwnBoard playermap={this.state.P1Map} onBoardClick={(i) => this.ownHandleClick(i)} />
          Your Fleet

          <Fleet fleet={this.state.P1Fleet} onFleetClick={(ship) => this.handleFleetClick(ship)}/>

          <Switch status={this.displayOrientation()} onSwitchClick={() => this.changeHorizontal()} message='the orientation is'/>
          Your Enemy
          <Board playermap={this.state.P2Map} onBoardClick={(i) => this.handleClick(i)}/>
        </div>
        <div id='P2' style={{width:'50%', display:'inline-block'}}>
          <Switch status={this.disPlayer()} onSwitchClick={() => this.switchPlayer()} message='the active player is'/>
          Enemy (P2)
          <OwnBoard playermap={this.state.P2Map} onBoardClick={(i) => this.ownHandleClick(i)}/>
          Enemy Fleet
          <Fleet fleet={this.state.P2Fleet} onFleetClick={(ship) => this.handleFleetClick(ship)}/>
          You
          <Switch status={this.displayOrientation()} onSwitchClick={() => this.changeHorizontal()} message='the orientation is'/>

          <Board playermap={this.state.P1Map} onBoardClick={(i) => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}
