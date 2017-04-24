import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default function Cell(props) {
  return (
    <button onClick={() => props.onClick()}>
      {props.status}
      {props.num}
    </button>
  );
}
