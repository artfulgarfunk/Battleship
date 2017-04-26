import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Cell from './cell';
import Board from './board';
import OwnBoard from './ownBoard';
export default class App extends React.Component {
  render () {
    return (
      <div>
        You
        <OwnBoard />
        Your Ghastly Enemy
        <Board />
      </div>
    );
  }
}
