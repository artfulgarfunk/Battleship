import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Cell from './cell';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>hellooooooo from {this.props.hello}</h1>;
        <Cell con='A FUCKING CON PROPS'/>;
        <Cell con='another damn cell'/>;
        <Cell con='she cells sea shells - HIT!'/>;
      </div>
    );
  }
}
