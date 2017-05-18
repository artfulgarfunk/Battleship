import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default function Cell(props) {
  if (props.status == 'B') {
    var stile = 'secondary'
  } else { var stile = 'info'}
  return (
    <Button bsStyle={stile} onClick={() => props.onClick()}>
      {props.status}
    </Button>
  );
}
