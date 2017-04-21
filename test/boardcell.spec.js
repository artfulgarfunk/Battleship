import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Cell from '../lib/components/cell';
import Board from '../lib/components/board';

describe('Board Features', () => {
  it('cell statuses initially equal board array statuses', () => {
    const wrapper = shallow(<Board />);
    wrapper.state('allCells').forEach(function(element) {
      expect(element.props.status).to.equal(null)
    });
  });

  it('cell statuses update on cell click', () => {
    const wrapper = mount(<Board />);
    wrapper.instance().handleClick(0)
    expect(wrapper.state('allStatuses')[0]).to.equal("X")
  });
})
