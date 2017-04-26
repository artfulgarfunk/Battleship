import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import Fleet from '../lib/components/fleet';

describe('<Fleet />', function () {
  it('has a 5-cell ship', function () {
    const wrapper = shallow(<Fleet />);
    expect(wrapper.state('carrier')).to.equal(5)
  });

  it('renders 5 Cell components', function () {
    const wrapper = shallow(<Fleet />);
    expect(wrapper.find(Cell)).to.have.length(5);
  });
})
