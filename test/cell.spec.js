import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Cell from '../lib/components/cell';
describe('<Cell />', function () {
  it('allows us to set props', () => {
    const wrapper = mount(<Cell con='sea-hit' />);
    expect(wrapper.props().con).to.equal('sea-hit');
  });
})
