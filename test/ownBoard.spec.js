import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import OwnBoard from '../lib/components/ownBoard';

describe('<OwnBoard />', function () {
  it('renders 100 cells', function () {
    const wrapper = shallow(<OwnBoard />);
    expect(wrapper.state('allStatuses')).to.have.length(100)
  });

  it('with default values of water for each cell', () => {
    const wrapper = shallow(<OwnBoard />);
    wrapper.state('allStatuses').forEach(function(element) {
      expect(element[0]).to.equal('~')
    });
  });

  it('cell click puts down the B', () => {
    const wrapper = mount(<OwnBoard />);
    wrapper.instance().handleClick(0)
    expect(wrapper.state('allStatuses')[0][0]).to.equal("B")
  });

  it('second cell click removes the battleship', () => {
    const wrapper = mount(<OwnBoard />);
    wrapper.instance().handleClick(2)
    wrapper.instance().handleClick(2)
    expect(wrapper.state('allStatuses')[2][0]).to.equal('~')
  });

  it("ships can only take up a max of 10 ships", () => {
    const wrapper = mount(<OwnBoard />);
    for(let i = 0; i<10; i++) {
      wrapper.instance().handleClick(i)
      expect(wrapper.state('allStatuses')[i][0]).to.equal('B')
    }
    wrapper.instance().handleClick(10)
    expect(wrapper.state('allStatuses')[10][0]).to.equal('~')

  });

})
