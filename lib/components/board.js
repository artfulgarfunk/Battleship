import React from 'react';

import Cell from './cell';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
        allStatuses: Array(100).fill('~'),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    let changer = this.state.allStatuses
    changer[i] == 'X' ? changer[i] = '~' : changer[i] = 'X'
    this.setState({
      allStatuses: changer
    })
  }

  renderCell(i) {
    const cells = this.state.allStatuses;
    return <Cell status={cells[i]} onClick={() => this.handleClick(i)} num={i}/>;
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
