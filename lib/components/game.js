import React from 'react';

import Cell from './cell';
import Board from './board';
import Fleet from './fleet';
import OwnBoard from './ownBoard';

export default class Game extends React.Component {
  render () {
    return (
      <div id='container'>
        <div>
          You
          <OwnBoard />
          Your Fleet
          <Fleet />
          Your Ghastly Enemy
          <Board />
        </div>
        <div>
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
