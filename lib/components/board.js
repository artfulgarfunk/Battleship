import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Cell from './cell';

export default class Board extends React.Component {
  render () {
    var indents = [];
    for(let i=0; i < 100; i++) {
      indents.push(<Cell />)
    }
    return (
      <div>
        {indents}
      </div>
   );
  }
};
