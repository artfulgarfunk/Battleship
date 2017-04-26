import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import Board from '../lib/components/board';

describe('<Board />', function () {
  it('renders 100 cells', function () {
    const wrapper = shallow(<Board />);
    expect(wrapper.state('allStatuses')).to.have.length(100)
  });

  it('with default values of null for each cell', () => {
    const wrapper = shallow(<Board />);
    wrapper.state('allStatuses').forEach(function(element) {
      expect(element[0]).to.equal(' ')
    });
  });
})
