import React from 'react';

import Cell from './cell';

export default class OwnBoard extends React.Component {
  renderCell(i) {
    const cells = this.props.playermap;
    return <Cell status={cells[i][0]} onClick={() => this.props.onBoardClick(i)} num={i} />;
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
