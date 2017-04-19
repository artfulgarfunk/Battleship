import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../lib/components/app';

describe('<App/>', function () {
  it('should say hello to passed props.name', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('hello')).to.be.defined
  });

  it('should have props for hello', function () {
    const wrapper = mount(<App hello='FRED-IN-THE-SPEC'/>);
    expect(wrapper.props().hello).to.equal('FRED-IN-THE-SPEC');
  });
});
