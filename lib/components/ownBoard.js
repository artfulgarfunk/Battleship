import React from 'react';

import Cell from './cell';

export default class OwnBoard extends React.Component {
  renderCell(i) {
    const cells = this.props.playermap;
    if (cells[i][0] == 'B') { var style = null } else { var style = 'info'};
    return <Cell style={style} status={cells[i][0]} onClick={() => this.props.onBoardClick(i)} num={i} />;
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
      <div id='board' style={{border:'5px black solid', minWidth:'500px', display:'inline-block'}}>
        {OwnBoard}
      </div>
   );
  }
};
