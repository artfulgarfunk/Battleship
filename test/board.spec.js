import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import Board from '../lib/components/board';

describe('<Board />', function () {
  it('renders 100 cells', function () {
    const wrapper = shallow(<Board />);
    console.log('HELLO HELLO HELLO');
    console.log(wrapper.state('allCells'));
    expect(wrapper.state('allCells')).to.have.length(100)
  });

  it('has a hundred element cell status array', () => {
     const wrapper = shallow(<Board />);
     expect(wrapper.state('allStatuses').length).to.equal(100);
  });

  it('with default values of null for each cell', () => {
    const wrapper = shallow(<Board />);
    wrapper.state('allStatuses').forEach(function(element) {
      expect(element).to.equal(null)
    });
  });
})
