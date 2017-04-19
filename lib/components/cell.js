import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

// export default class Cell extends React.Component {
//   render() {
//     return (
//       <button onClick={(props) => props.onButtonClick()}>
//         {}
//       </button>
//     );
//    }
//  };

export default function Cell(props) {
  return (
    <button onClick={() => props.onButtonClick()}>
      {props.status}
    </button>
  );
}
