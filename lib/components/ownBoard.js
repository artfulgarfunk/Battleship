import React from 'react';

import Cell from './cell';

export default class OwnBoard extends React.Component {
  constructor() {
    super();
    this.state = {
        allStatuses: Array(100).fill(Array(2).fill('~')),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    let changer = this.state.allStatuses
    if (changer[i][0] == '~') {
      changer[i] = ['B','~']
    } else {
      changer[i]= ['~','~']
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
    var OwnBoard = [];
    var stochastic = 0
      for (var i=0; i < 10; i ++) {
        OwnBoard.push(this.renderRow(i+stochastic))
        stochastic += 9
      }
    return (
      <div>
        {OwnBoard}
      </div>
   );
  }
};
