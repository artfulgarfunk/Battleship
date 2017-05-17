import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default function Cell(props) {
  return (
    <button onClick={() => props.onClick()}>
      {props.status}
    </button>
  );
}
