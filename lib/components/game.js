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

    this.handleClick = this.handleClick.bind(this);
    this.ownHandleClick = this.ownHandleClick.bind(this);
    this.handleFleetClick = this.handleFleetClick.bind(this);
    this.displayOrientation = this.displayOrientation.bind(this);
    this.changeHorizontal = this.changeHorizontal.bind(this);
    this.updateFleetAndMapP1 = this.updateFleetAndMapP1.bind(this);
    this.updateFleetAndMapP2 = this.updateFleetAndMapP2.bind(this);
  }

  handleClick(i) {
    let changer = this.whichPlayerMap() // selects whoevers map you want to display on the opponent board. shouldn't need to know the fleet
    let reveal = changer[i][0]          // selects the first element of the array at the given index
    changer[i] = [reveal, reveal]       // sets both array elements equal to the first element, e.g. the B or whatever.
                                        // so that when you pass it to board it gets displayed.
    if (this.state.currentPlayer == 1) { // depending on whose go it is you update either of the player maps. not dry, will refactor
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

    let current = this.state.currentShip
    let rotated = this.rotate(changer)
    let ri = this.rotateIndex(i)
    if (current[2] > 0 && this.surroundCheck(ri, current, rotated)) {
      fleet.forEach ((ship) => {
        if (ship[0] == current[0]) {
          ship[2] -= 1
        }
      })

      for (let x=0; x < current[1]; x++) {
        rotated[ri + x] = ['B', ' ']
      }

    }
    var finalmap = this.derotate(rotated)

    if (this.state.currentPlayer == 1) {
      this.setState({
        P1Map: finalmap,
        P1Fleet: fleet
      })
    } else {
      this.setState({
        P2Map: finalmap,
        P2Fleet: fleet
      })
    }

  // (this.state.currentPlayer == 1) ? this.updateFleetAndMapP1(changer,fleet) : this.updateFleetAndMapP2(changer,fleet)
  // absolutely no idea why the line above doesn't work in place of lines 105 to 115
  // works perfectly fine with horizontal place...

  }

  updateFleetAndMapP1(mapp,fleet) {
    this.setState({
      P1Map: mapp,
      P1Fleet: fleet
    })
  }

  updateFleetAndMapP2(mapp,fleet) {
    this.setState({
      P2Map: mapp,
      P2Fleet: fleet
    })
  }

  rotateIndex(i) {
    let row = Math.floor(i/10)
    let rowEnd = Math.ceil((i + 1)/10) * 10
    let rowPlace = i - row*10
    let x = (9-rowPlace) * 10 + row
    return x
  }

  derotate(board) {
    let derotated = Array(100)
    for (let i=0; i<10; i++) {
      for (let j=0; j<10; j++) {
        derotated[10 * i + 9 - j] = board[i + 10 * j]
      }
    }
    return derotated
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

  horizontalPlace(i) {
    var changer = this.whichPlayerMap()
    var fleet = this.whichPlayerFleet()

    let current = this.state.currentShip
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
   (this.state.currentPlayer == 1) ? this.updateFleetAndMapP1(changer,fleet) : this.updateFleetAndMapP2(changer,fleet)
  }


  handleFleetClick(ship) {
      this.setState({
        currentShip: ship,
      })
  }

  changeHorizontal(){
    this.setState({
      horizontal: !this.state.horizontal
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
