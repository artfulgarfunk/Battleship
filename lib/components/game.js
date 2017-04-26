import React from 'react';

import Cell from './cell';
import Board from './board';
import Fleet from './fleet';
import OwnBoard from './ownBoard';

export default class Game extends React.Component {
  render () {
    return (
      <div>
        <div style={{width:'50%', display:'inline-block'}}>
          You
          <OwnBoard />
          Your Fleet
          <Fleet />
          Your Ghastly Enemy
          <Board />
        </div>
        <div style={{width:'50%', display:'inline-block'}}>
          Enemy
          <OwnBoard />
          Enemy Fleet
          <Fleet />
          Ghastly You
          <Board />
        </div>
      </div>
    );
  }
}
