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
        fleet: [
          ['carrier',5,1],
          ['battleship',4,1],
          ['cruiser',3,2],
          ['destroyer',2,2],
          ['submarine',1,2]
        ],
        horizontal: true,
        currentShip: [],
        P1Map: Array(100).fill(['~', ' ']),
        P2Map: Array(100).fill(Array(2).fill(' '))
    };

    this.handleClick = this.handleClick.bind(this);
    this.ownHandleClick = this.ownHandleClick.bind(this);
    this.handleFleetClick = this.handleFleetClick.bind(this);
    this.displayOrientation = this.displayOrientation.bind(this);
    this.changeHorizontal = this.changeHorizontal.bind(this);
  }

  handleClick(i) {
    let changer = this.state.P1Map
    let reveal = changer[i][0]
    changer[i] = [reveal, reveal]
    this.setState({
      allStatuses: changer
    })
  }

  surroundCheck(i, ship, mapp) {// checks ship proximity and whether it's at the end of a row. good job Stefan
                                // could this be split into other methods, independent of whether they're vertical or not?
                                // a ship proximity checker...for every changed element; if they're in the middle, do they have more than 2
                                // battleship neighbours? neighbourcheck method(game of life style!), if they're at the end, do they have more than one?
                                // if you're looking for column/row end, if horizontal, every element must start with same number!
                                // if vertical, every element must end in the same number!
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
    if (this.state.horizontal) {
      this.horizontalPlace(i)
    } else {
      this.verticalPlace(i)
    }
  }

  verticalPlace(i) {
    let changer = this.state.P1Map
    let current = this.state.currentShip
    let fleet = this.state.fleet
    let rotated = this.rotate(changer)
    let ri = this.rotateIndex(i)
    if (current[2] > 0 && this.surroundCheck(ri, current, rotated)) { // if the number of those ships that there are supposed to be is still greater than zero

      fleet.forEach ((ship) => { // for every element in the fleet array
        if (ship[0] == current[0]) { // if the ship is equal to the current one
          ship[2] -= 1              // change that ship in the fleet array. i.e. change its count. set state later in method
        }
      })

      for (let x=0; x < current[1]; x++) { // change the elements to B. these are the ones we want.
        rotated[ri + x] = ['B', ' ']
        // boat.push(i+x) // boat should now be an array of just the index numbers e.g. 49,50,51,52,53,54. then minus rownumber * 10 from each,
                        // are they all between 0 and 10? then they're on the same line...
      }

    }
    let finalmap = this.derotate(rotated)

    this.setState({
      P1Map: finalmap,
      fleet: fleet
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

  horizontalPlace(i) {
    let changer = this.state.P1Map
    let current = this.state.currentShip
    let fleet = this.state.fleet
    if (current[2] > 0 && this.surroundCheck(i, current, changer)) { // if the number of those ships that there are supposed to be is still greater than zero
      fleet.forEach ((ship) => { // for every element in the fleet array
        if (ship[0] == current[0]) { // if the ship is equal to the current one
          ship[2] -= 1              // change that ship in the fleet array. i.e. change its count. set state later in method
        }
      })

      for (let x=0; x < current[1]; x++) { // change the elements to B. these are the ones we want.
        changer[i + x] = ['B', ' ']
        // boat.push(i+x) // boat should now be an array of just the index numbers e.g. 49,50,51,52,53,54. then minus rownumber * 10 from each,
                        // are they all between 0 and 10? then they're on the same line...
      }
    }

    this.setState({
      P1Map: changer,
      fleet: fleet
    })
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
    if (this.state.horizontal) {
      return 'horizontal'
    } else {
      return 'vertical'
    }
  }

  render () {
    return (
      <div>
        <div id='P1' style={{width:'50%', display:'inline-block'}}>
          You (P1)
          <OwnBoard playermap={this.state.P1Map} onBoardClick={(i) => this.ownHandleClick(i)} />
          Your Fleet
          <Fleet fleet={this.state.fleet} onFleetClick={(ship) => this.handleFleetClick(ship)}/>
          <Switch status={this.displayOrientation()} onSwitchClick={() => this.changeHorizontal()}/>
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





















// vertProxCheck(i) {
//   return true
// }
//
// columnCheck(i) {
//   let changer = this.state.P1Map
//   let current = this.state.currentShip
//   let fleet = this.state.fleet
//   let c = i
//   // let column = i.toString()
//   // while the number is greater than 10, minus 10 from it...
//
//   for (let x=0; x < current[1]; x++) { // change the elements to B. these are the ones we want.
//     if (i + (x*10) > 99) break
//     changer[i + (x*10)] = ['B', ' ']
//     // boat.push(i+x) // boat should now be an array of just the index numbers e.g. 49,50,51,52,53,54. then minus rownumber * 10 from each,
//                     // are they all between 0 and 10? then they're on the same line...
//   }
//
//   while (c > 10) {
//     c -= 10
//   }
//   // this should now be the column number. multiply that by 10, if all the ship numbers minus c*10 are less than 10, we're good to go. if more
//   // it's gone over into another column.
//   return true
// }
//
// verticalPlace(i) { // do vertical placement your way, then compare with Stefan's horizontal placement...s
//   let changer = this.state.P1Map
//   let current = this.state.currentShip
//   let fleet = this.state.fleet
//   // if this.verticalColumnCheck and this.vertProxCheck then
//   if (current[2] > 0 && this.columnCheck && this.vertProxCheck) {
//
//     fleet.forEach ((ship) => { // for every element in the fleet array
//       if (ship[0] == current[0]) { // if the ship is equal to the current one
//         ship[2] -= 1              // change that ship in the fleet array. i.e. change its count. set state later in method
//       }
//     })
//
//     for (let x=0; x < current[1]; x++) { // change the elements to B. these are the ones we want.
//       changer[i + (x*10)] = ['B', ' ']
//       // boat.push(i+x) // boat should now be an array of just the index numbers e.g. 49,50,51,52,53,54. then minus rownumber * 10 from each,
//                       // are they all between 0 and 10? then they're on the same line...
//     }
//
//   }
//   this.setState({
//     P1Map: changer,
//     fleet: fleet
//   })
// }
