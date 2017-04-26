import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import Fleet from '../lib/components/fleet';

describe('<Fleet />', function () {
  it('has a 5-cell aircraft carrier', function () {
    const wrapper = shallow(<Fleet />);
    expect(wrapper.state('carrier')).to.equal(5)
  });

  it('has a 4-cell Battleship', function () {
    const wrapper = shallow(<Fleet />);
    expect(wrapper.state('battleship')).to.equal(4)
  });

  it('has a 3-cell cruiser', function () {
    const wrapper = shallow(<Fleet />);
    expect(wrapper.state('cruiser')).to.equal(3)
  });
  // 
  // it('has two 2-cell destroyers', function () {
  //   const wrapper = shallow(<Fleet />);
  //   expect(wrapper.state('destroyer')).to.equal(2)
  // });
  //
  // it('has two 1-cell submarines', function () {
  //   const wrapper = shallow(<Fleet />);
  //   expect(wrapper.state('submarine')).to.equal(5)
  // });

  it('renders 18 Cell components', function () {
    const wrapper = shallow(<Fleet />);
    expect(wrapper.find(Cell)).to.have.length(18);
  });

})
