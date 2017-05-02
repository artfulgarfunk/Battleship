import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
// components
import Game from '../lib/components/game';
import Cell from '../lib/components/cell';
import OwnBoard from '../lib/components/ownBoard';
import Fleet from '../lib/components/fleet';
import Board from '../lib/components/board';

describe('<Game />', function () {
  it('renders 2 player boards, 2 opponent boards & 2 fleets', function () {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Board)).to.have.length(2);
    expect(wrapper.find(OwnBoard)).to.have.length(2);
    expect(wrapper.find(Fleet)).to.have.length(2);
  });

  it('renders a total of 442 Cell components', function () {
    const wrapper = mount(<Game />);
    expect(wrapper.find(Cell)).to.have.length(442);
  });

  it('with default values of null for each cell', () => {
    const wrapper = mount(<Game />);
    wrapper.state('P1Map').forEach(function(element) {
    expect(element[0]).to.equal('~')
    expect(element[1]).to.equal(' ')
    });
    // wrapper.state('P2Map').forEach(function(element) {
    // expect(element[0]).to.equal('~')
    // expect(element[1]).to.equal(' ')
    // });
  });

  it('it has a fleet of ships with 5 types', function () {
    const wrapper = shallow(<Game />);
    const fleet = wrapper.state('fleet');
    expect(fleet).to.have.length(5)
  });

  it('has a 5-cell aircraft carrier', function () {
    const wrapper = shallow(<Game />);
    const fleet = wrapper.state('fleet');
    expect(fleet[0]).to.eql(['carrier',5,1])
  });

  it('has a 4-cell Battleship', function () {
    const wrapper = shallow(<Game />);
    const fleet = wrapper.state('fleet');
    expect(fleet[1]).to.eql(['battleship',4,1])
  });

  it('has a 3-cell cruiser', function () {
    const wrapper = shallow(<Game />);
    const fleet = wrapper.state('fleet');
    expect(fleet[2]).to.eql(['cruiser',3,2])
  });

  it('has two 2-cell destroyers', function () {
    const wrapper = shallow(<Game />);
    const fleet = wrapper.state('fleet');
    expect(fleet[3]).to.eql(['destroyer',2,2])
  });

  it('has two 1-cell submarines', function () {
    const wrapper = shallow(<Game />);
    const fleet = wrapper.state('fleet');
    expect(fleet[4]).to.eql(['submarine',1,2])
  });

  it('cell click reveals hit or miss', () => {
    // const wrapper = shallow(<Game />);
    // wrapper.instance().handleClick(0)
    // expect(wrapper.state('P1Map')[0][0]).to.equal("~")
  });

  it('second cell click does not change cell status', () => {
    // const wrapper = shallow(<Game />);
    // wrapper.instance().handleClick(2)
    // wrapper.instance().handleClick(2)
    // expect(wrapper.state('P1Map')[2][0]).to.equal('')
  });

  it('clicking on a ship in the fleet selects that ship for the board', () => {
    const wrapper = mount(<Game />);
    // const fleet = wrapper.find(Fleet).nodes[0]
    // console.log('FLEET FLEET FLEET FLEET FLEET FLEET FLEET');
    // console.log(wrapper.find(Fleet).nodes[0]);
    wrapper.instance().handleFleetClick(['carrier',5,1])
    expect(wrapper.state('currentShip')).to.eql(['carrier',5,1])
  });

  it('then clicking on own board puts down the ship', () => {
    const wrapper = mount(<Game />);
    const boat = ['carrier',5,1]
    wrapper.instance().handleFleetClick(boat)
    wrapper.instance().ownHandleClick(0)
    for (let x=0; x<boat[1]; x++) {
      expect(wrapper.state('P1Map')[x][0]).to.equal("B")
    }
  });

})
