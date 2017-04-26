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
  //
  // it('with default values of water for each cell', () => {
  //   const wrapper = shallow(<OwnBoard />);
  //   wrapper.state('allStatuses').forEach(function(element) {
  //     expect(element[0]).to.equal('~')
  //   });
  // });
  //
  // it('cell click puts down the B', () => {
  //   const wrapper = mount(<OwnBoard />);
  //   wrapper.instance().handleClick(0)
  //   expect(wrapper.state('allStatuses')[0][0]).to.equal("B")
  // });
  //
  // it('second cell click removes the battleship', () => {
  //   const wrapper = mount(<OwnBoard />);
  //   wrapper.instance().handleClick(2)
  //   wrapper.instance().handleClick(2)
  //   expect(wrapper.state('allStatuses')[2][0]).to.equal('~')
  // });
  //
  // it("ships can only take up a max of 10 ships", () => {
  //   const wrapper = mount(<OwnBoard />);
  //   for(let i = 0; i<10; i++) {
  //     wrapper.instance().handleClick(i)
  //     expect(wrapper.state('allStatuses')[i][0]).to.equal('B')
  //   }
  //   wrapper.instance().handleClick(10)
  //   expect(wrapper.state('allStatuses')[10][0]).to.equal('~')
  //
  // });

})
