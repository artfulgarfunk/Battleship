import React from 'react';

import Cell from './cell';

export default class Board extends React.Component {
  constructor() {
    super();
    let arr = Array(100).fill(Array(2).fill(' '))
    let fleet = [2,3,18,28,38,48,58,77,78,79,90,91,92,93,24,42]
    for (let x = 0; x < 100; x++) {
      if (fleet.includes(x)) {
        arr[x] = [' ','B']
      } else {
        arr[x] = [' ','~']
      }
    }
    this.state = {
        allStatuses: arr,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    let changer = this.state.allStatuses
    if (changer[i][0] == ' ') {
      changer[i].shift()
    }
    this.setState({
      allStatuses: changer
    })
  }

  renderCell(i) {
    const cells = this.state.allStatuses;
    return <Cell status={cells[i][0]} onClick={() => this.handleClick(i)} num={i} />;
  }

  renderRow(i) {
    var arr = []
      for (var x=0; x < 10; x ++) {
        arr.push(this.renderCell(i+x))
      }
    return <div> {arr} </div>;
  }

  render () {
    var board = [];
    var stochastic = 0
      for (var i=0; i < 10; i ++) {
        board.push(this.renderRow(i+stochastic))
        stochastic += 9
      }
    return (
      <div>
        {board}
      </div>
   );
  }
};
