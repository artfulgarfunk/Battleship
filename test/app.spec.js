import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../lib/app';

describe('<App/>', function () {
  it('should say hello to passed props.name', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('hello')).to.have.length(1);
  });

  it('should have props for email and src', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.props().hello).to.be.defined;
  });
});
