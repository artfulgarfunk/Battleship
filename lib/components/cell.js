import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Cell extends React.Component {
  render() {
    var con = this.props.con;
    return (
      <div>
        <h1> Here's goshdarn cell </h1>
        <h1> it's condition is {this.props.con}</h1>
      </div>
    );
   }
 };
