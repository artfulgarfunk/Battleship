import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Cell from '../lib/components/cell';
import Board from '../lib/components/board';

describe('Board Features', () => {
  // it('has a default mapping of battleships', () => {
  //   const wrapper = shallow(<Board />);
  //   wrapper.state('allStatuses')
  //   let fleet = [2,3,18,28,38,48,58,77,78,79,90,91,92,93,24,42]
  //   for (let i=0; i<100; i++) {
  //     if (fleet.includes(i)) {
  //       expect(wrapper.state('allStatuses')[i][1]).to.equal('B')
  //     } else {
  //       expect(wrapper.state('allStatuses')[i][1]).to.equal('~')
  //     }
  //   }
  // });

  it('cell click reveals hit or miss', () => {
    const wrapper = mount(<Board />);
    wrapper.instance().handleClick(0)
    expect(wrapper.state('allStatuses')[0][0]).to.equal("~")
  });

  it('second cell click does not change cell status', () => {
    const wrapper = mount(<Board />);
    wrapper.instance().handleClick(2)
    wrapper.instance().handleClick(2)
    expect(wrapper.state('allStatuses')[2][0]).to.equal('B')
  });


})
