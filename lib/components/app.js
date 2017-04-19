import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Cell from './cell';
import Board from './board';

export default class App extends React.Component {
  render () {
    return (
      <Board />
    );
  }
}