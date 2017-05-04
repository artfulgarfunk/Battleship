import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default function Switch(props) {
  return (
    <div>
      {props.message}
      <button onClick={() => props.onSwitchClick()}>
         {props.status}
      </button>
    </div>
  );
}
