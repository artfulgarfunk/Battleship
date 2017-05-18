import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default function Cell(props) {
  // if (props.status == 'B') {
  //   var style = 'secondary'
  // } else { var style = 'info'}
  return (
    <Button bsStyle={props.style} onClick={() => props.onClick()}>
      {props.status}
    </Button>
  );
}
