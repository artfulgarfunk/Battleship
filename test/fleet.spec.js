import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import Fleet from '../lib/components/fleet';

describe('<Fleet />', function () {
  it('it has a fleet of ships with 5 types', function () {
    const wrapper = shallow(<Fleet />);
    const fleet = wrapper.state('fleet');
    expect(fleet).to.have.length(5)
  });

  it('has a 5-cell aircraft carrier', function () {
    const wrapper = shallow(<Fleet />);
    const fleet = wrapper.state('fleet');
    expect(fleet[0]).to.eql(['carrier',5,1])
  });

  it('has a 4-cell Battleship', function () {
    const wrapper = shallow(<Fleet />);
    const fleet = wrapper.state('fleet');
    expect(fleet[1]).to.eql(['battleship',4,1])
  });

  it('has a 3-cell cruiser', function () {
    const wrapper = shallow(<Fleet />);
    const fleet = wrapper.state('fleet');
    expect(fleet[2]).to.eql(['cruiser',3,2])
  });

  it('has two 2-cell destroyers', function () {
    const wrapper = shallow(<Fleet />);
  const fleet = wrapper.state('fleet');
  expect(fleet[3]).to.eql(['destroyer',2,2])
  });

  it('has two 1-cell submarines', function () {
    const wrapper = shallow(<Fleet />);
  const fleet = wrapper.state('fleet');
  expect(fleet[4]).to.eql(['submarine',1,2])
  });

  it('renders 18 Cell components', function () {
    const wrapper = shallow(<Fleet />);
    expect(wrapper.find(Cell)).to.have.length(21);
  });

})
