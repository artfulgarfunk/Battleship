import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Cell from './cell';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
        allStatuses: Array(100).fill(null)
    };
  }
  render () {
    var allCells = [];
    for(let i=0; i < 100; i++) {
      allCells.push(<Cell status=' '/>)
    }
    return (
      <div>
        <div>
          {allCells.slice(0, 10)}
        </div>
        <div>
          {allCells.slice(10, 20)}
        </div>
        <div>
          {allCells.slice(20, 30)}
        </div>
        <div>
          {allCells.slice(30, 40)}
        </div>
        <div>
          {allCells.slice(40, 50)}
        </div>
        <div>
          {allCells.slice(50, 60)}
        </div>
        <div>
          {allCells.slice(60, 70)}
        </div>
        <div>
          {allCells.slice(70, 80)}
        </div>
        <div>
          {allCells.slice(80, 90)}
        </div>
        <div>
          {allCells.slice(90, 100)}
        </div>
      </div>
   );
  }
};
