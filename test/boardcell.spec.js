import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Cell from '../lib/components/cell';
import Board from '../lib/components/board';

describe('Board Features', () => {
  it('has a default mapping of battleships', () => {
    const wrapper = shallow(<Board />);
    wrapper.state('allStatuses')
    let fleet = [2,3,18,28,38,48,58,77,78,79,90,91,92,93,24,42]
    for (let i=0; i<100; i++) {
      if (fleet.includes(i)) {
        expect(wrapper.state('allStatuses')[i]).to.equal('B')
      } else {
        expect(wrapper.state('allStatuses')[i]).to.equal('~')
      }
    }
  });

  it('cell statuses update on cell click', () => {
    const wrapper = mount(<Board />);
    wrapper.instance().handleClick(0)
    expect(wrapper.state('allStatuses')[0]).to.equal("S")
  });

  it('cell statuses update to empty on second click', () => {
    const wrapper = mount(<Board />);
    wrapper.instance().handleClick(1)
    wrapper.instance().handleClick(1)
    expect(wrapper.state('allStatuses')[1]).to.equal('~')
  });


})
