import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
// components
import Game from '../lib/components/game';
import Cell from '../lib/components/cell';
import OwnBoard from '../lib/components/ownBoard';
import Fleet from '../lib/components/fleet';
import Board from '../lib/components/board';

describe('<Game />', function () {
  it('renders 2 player boards, 2 opponent boards & 2 fleets', function () {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Board)).to.have.length(2);
    expect(wrapper.find(OwnBoard)).to.have.length(2);
    expect(wrapper.find(Fleet)).to.have.length(2);
  });

  it('has a default mapping of battleships', () => {
    const wrapper = shallow(<Board />);
    wrapper.state('allStatuses')
    let fleet = [2,3,18,28,38,48,58,77,78,79,90,91,92,93,24,42]
    for (let i=0; i<100; i++) {
      if (fleet.includes(i)) {
        expect(wrapper.state('allStatuses')[i][1]).to.equal('B')
      } else {
        expect(wrapper.state('allStatuses')[i][1]).to.equal('~')
      }
    }
  });

})
