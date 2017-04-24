import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Cell from './cell';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
        allStatuses: Array(100).fill('~'),
        allCells: Array(100).fill(<Cell status={'~'}/>)
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
    return <Cell status={cells[i]} onClick={() => this.handleClick(i)} />;
  }

  render () {
    return (
      <div>
        <div>
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
          {this.renderCell(9)}
        </div>
        <div>
          {this.renderCell(10)}
          {this.renderCell(11)}
          {this.renderCell(12)}
          {this.renderCell(13)}
          {this.renderCell(14)}
          {this.renderCell(15)}
          {this.renderCell(16)}
          {this.renderCell(17)}
          {this.renderCell(18)}
          {this.renderCell(19)}
        </div>
      </div>
   );
  }
};
