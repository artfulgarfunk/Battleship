import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Cell from './cell';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
        allStatuses: Array(100).fill(null),
        allCells: Array(100).fill(<Cell status={null}/>)
    };
  }
  //  ACTUALLY MAP allStatuses TO allCells
  render () {
    return (
      <div>
        <div>
          {this.state.allCells.slice(0, 10)}
        </div>
        <div>
          {this.state.allCells.slice(10, 20)}
        </div>
        <div>
          {this.state.allCells.slice(20, 30)}
        </div>
        <div>
          {this.state.allCells.slice(30, 40)}
        </div>
        <div>
          {this.state.allCells.slice(40, 50)}
        </div>
        <div>
          {this.state.allCells.slice(50, 60)}
        </div>
        <div>
          {this.state.allCells.slice(60, 70)}
        </div>
        <div>
          {this.state.allCells.slice(70, 80)}
        </div>
        <div>
          {this.state.allCells.slice(80, 90)}
        </div>
        <div>
          {this.state.allCells.slice(90, 100)}
        </div>
      </div>
   );
  }
};
