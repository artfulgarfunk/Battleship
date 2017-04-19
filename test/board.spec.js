import React from 'react';
import {shallow } from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import Board from '../lib/components/board';

describe('<Board />', function () {
  it('renders 100 cells', function () {
    const wrapper = shallow(<Board />);
    expect(wrapper.find(Cell)).to.have.length(100)
  });
  // it('renders a 100 cell grid', () => {
  //   const wrapper = shallow(<Board />);
  //   expect(wrapper.find(Cell)).to.have.length(100);
  // });
})
