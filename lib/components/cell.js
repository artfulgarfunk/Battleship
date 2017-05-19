import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default function Cell(props) {
  // if (props.status == 'B') {
  //   var style = 'secondary'
  // } else { var style = 'info'}

  return (
    <div style={{width:'50px', height:'50px', display:'inline-block'}}>
    <Button class='btn-block' style={{width:'100%', height:'100%'}} bsStyle={props.style} onClick={() => props.onClick()}>
      {props.status}
    </Button>
    </div>
  );
}
