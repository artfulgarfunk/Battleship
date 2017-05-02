import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import OwnBoard from '../lib/components/ownBoard';

describe('<OwnBoard />', function () {

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
