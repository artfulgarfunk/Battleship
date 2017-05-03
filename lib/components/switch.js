import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default function Switch(props) {
  return (
    <div>
    The orientation is:
      <button onClick={() => props.onSwitchClick()}>
         {props.status}
      </button>
    </div>
  );
}
