import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>hellooooooo from {this.props.hello}</h1>;
      </div>
    );
  }
}
