import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

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
    arr.push(this.renderCell(i));
    arr.push(this.renderCell(i+1));
    arr.push(this.renderCell(i+2));
    arr.push(this.renderCell(i+3));
    arr.push(this.renderCell(i+4));
    arr.push(this.renderCell(i+5));
    arr.push(this.renderCell(i+6));
    arr.push(this.renderCell(i+7));
    arr.push(this.renderCell(i+8));
    arr.push(this.renderCell(i+9));
    return <div> {arr} </div>;
  }

  render () {
    var finale = [];
    var stochastic = 0
      for (var i=0; i < 10; i ++) {
        finale.push(this.renderRow(i+stochastic))
        stochastic += 9
      }
    // var numrows = []
    // for (var x=0; x < 10; x++) {
    //   numrows.push(cells)
    // }
    return (
      <div>
        {finale}
      </div>
   );
  }
};


// <div>
//
//   {this.renderCell(0)}
//   {this.renderCell(1)}
//   {this.renderCell(2)}
//   {this.renderCell(3)}
//   {this.renderCell(4)}
//   {this.renderCell(5)}
//   {this.renderCell(6)}
//   {this.renderCell(7)}
//   {this.renderCell(8)}
//   {this.renderCell(9)}
// </div>
// <div>
//   {this.renderCell(10)}
//   {this.renderCell(11)}
//   {this.renderCell(12)}
//   {this.renderCell(13)}
//   {this.renderCell(14)}
//   {this.renderCell(15)}
//   {this.renderCell(16)}
//   {this.renderCell(17)}
//   {this.renderCell(18)}
//   {this.renderCell(19)}
// </div>
