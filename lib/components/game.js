import React from 'react';

import Cell from './cell';
import Board from './board';
import Fleet from './fleet';
import OwnBoard from './ownBoard';
import Switch from './switch';

const standardFleet = [
  ['carrier',5,1],
  ['battleship',4,1],
  ['cruiser',3,2],
  ['destroyer',2,2],
  ['submarine',1,2]
]

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        P1Fleet: standardFleet,
        P2Fleet: standardFleet,
        horizontal: true,
        currentShip: [],
        currentPlayer: 1,
        P1Map: Array(100).fill(['~', ' ']),
        P2Map: Array(100).fill(['~', ' '])
    };
  }

  selectShipClick(ship) {
      this.setState({
        currentShip: ship,
      })
  }

  placeShipClick(i) {
    this.state.horizontal ? this.horizontalPlace(i) : this.verticalPlace(i)
  }

  fireClick(i) {
    let firingMap = this.whichPlayerMap()
    let x = firingMap[i][0]
    firingMap[i] = [x, x]
    let mapToUpdate = 'P' + this.state.currentPlayer + 'Map'
    this.setState({
      mapToUpdate: firingMap
    })
  }

  surroundCheck(i, ship, mapToCheck) {
    let row = Math.floor(i/10)
    let rowEnd = Math.ceil((i + 1)/10) * 10
    let rowPlace = i - row * 10
    let status = true
    if (i + ship[1] > rowEnd) status = false
    for (let j = rowPlace - 1; j < rowPlace + ship[1] + 1; j++) {
      for (let k = row - 1; k < row + 2; k++) {
        if (k < 0) k = 0
        if (k > 9) break
        let checker = k * 10 + j
        if (checker < 0) checker = 0
        if (checker > 99) break
        if (mapToCheck[checker][0] != '~') {
          status = false
        }
      }
    }
    return status
  }

  verticalPlace(i) {
    let currentMap = this.whichPlayerMap()
    let currentFleet = this.whichPlayerFleet()
    let currentShip = this.state.currentShip

    let rotatedMap = this.rotateMap(currentMap)
    let rotatedIndex = this.rotateIndex(i)

    this.updateFleetAndMap(rotatedIndex, currentShip, rotatedMap, currentFleet)

    let finalMap = this.rotateMap(this.rotateMap(this.rotateMap(rotatedMap)))

    this.setFleetAndMap(finalMap, currentFleet)
  }

  horizontalPlace(i) {
    let currentMap = this.whichPlayerMap()
    let currentFleet = this.whichPlayerFleet()
    let currentShip = this.state.currentShip

    this.updateFleetAndMap(i, currentShip, currentMap, currentFleet)

    this.setFleetAndMap(currentMap, currentFleet)
  }

  updateFleetAndMap(i, currentShip, currentMap, currentFleet) {
    if (currentShip[2] > 0 && this.surroundCheck(i, currentShip, currentMap)) {
      currentFleet.forEach ((ship) => {
        if (ship[0] == currentShip[0]) ship[2] -= 1
      })
      for (let x = 0; x < currentShip[1]; x++) {
        currentMap[i + x] = ['B', ' ']
      }
    }
  }

  setFleetAndMap(mapp, fleet) {
    let mapToSet = 'P' + this.state.currentPlayer + 'Map'
    let fleetToSet = 'P' + this.state.currentPlayer + 'Fleet'
    this.setState({
      mapToSet: mapp,
      fleetToSet: fleet
    })
  }

  rotateIndex(i) {
    let row = Math.floor(i/10)
    let rowEnd = Math.ceil((i + 1)/10) * 10
    let rowPlace = i - row * 10
    let rotatedIndex = (9 - rowPlace) * 10 + row
    return rotatedIndex
  }

  rotateMap(mapp) {
    let rotated = Array(100)
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        rotated[(9 - i) * 10 + j] = mapp[i + 10 * j]
      }
    }
    return rotated
  }

  whichPlayerMap() {
    let thisMap = (this.state.currentPlayer == 1) ? this.state.P1Map : this.state.P2Map
    return thisMap
  }

  whichPlayerFleet() {
    let thisFleet = (this.state.currentPlayer == 1) ? this.state.P1Fleet : this.state.P2Fleet
    return thisFleet
  }

  displayOrientation(){
    let orientation = (this.state.horizontal) ? 'horizontal' : 'vertical'
    return orientation
  }

  switchOrientation(){
    this.setState({
      horizontal: !this.state.horizontal
    })
  }

  disPlayer(){
    let player = (this.state.currentPlayer == 1) ? 'P1' : 'P2'
    return player
  }

  switchPlayer(){
    let p = (this.state.currentPlayer == 1) ? 2 : 1
    this.setState({
      currentPlayer: p
    })
  }

  render () {
    return (
      <div>
        <div>
          <Switch status={this.disPlayer()} onSwitchClick={() => this.switchPlayer()} message='The active player is '/>
          <p></p>
        </div>
        <div id='P1' style={{width:'50%', display:'inline-block'}}>
          You (P1)
          <OwnBoard playermap={this.state.P1Map} onBoardClick={(i) => this.placeShipClick(i)} />
          <p></p>
          Your Fleet
          <Fleet fleet={this.state.P1Fleet} onFleetClick={(ship) => this.selectShipClick(ship)}/>
          <p></p>
          <Switch status={this.displayOrientation()} onSwitchClick={() => this.switchOrientation()} message='Next ship is '/>
          <p></p>
          Your Enemy
          <Board playermap={this.state.P2Map} onBoardClick={(i) => this.fireClick(i)}/>
        </div>
        <div id='P2' style={{width:'50%', display:'inline-block'}}>
          Enemy (P2)
          <OwnBoard playermap={this.state.P2Map} onBoardClick={(i) => this.placeShipClick(i)}/>
          <p></p>
          Enemy Fleet
          <Fleet fleet={this.state.P2Fleet} onFleetClick={(ship) => this.selectShipClick(ship)}/>
          <p></p>
          You
          <Switch status={this.displayOrientation()} onSwitchClick={() => this.switchOrientation()} message='Next ship is '/>
          <p></p>
          <Board playermap={this.state.P1Map} onBoardClick={(i) => this.fireClick(i)}/>
        </div>
      </div>
    );
  }
}
