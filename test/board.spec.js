import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
import Board from '../lib/components/board';

describe('<Board />', function () {
  it('allows setting props', () => {
    const wrapper = mount(<Board playermap={Array(100).fill(' ')} />);
    wrapper.setProps({val: 'hit'});
    expect(wrapper.props().val).to.equal('hit')
  });

  it ('contains 100 cells', function () {
    const wrapper = shallow(<Board playermap={Array(100).fill(['~', ' '])} />);
    expect(wrapper.find(Cell)).to.have.length(100);
  });

})
