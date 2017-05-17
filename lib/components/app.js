import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

import Cell from './cell';
import Game from './game';
import Board from './board';
import Fleet from './fleet';
import OwnBoard from './ownBoard';
export default class App extends React.Component {
  render () {
    return (
        <Game />
    );
  }
}
