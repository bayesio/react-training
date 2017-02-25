import 'jsdom-global/register'; // needed for mount to work

import React from 'react';
import sinon from 'sinon';

import { mount } from 'enzyme';
import { expect } from 'chai';

import HeroList from './List.presenter';

const expected = { uuid: 'kingofthenorth', heroName: 'King of the North', s3ImageUrl: 'snowman.jpg' };
describe('<HeroList />', () => {
  const spy = sinon.spy();
  it('calls listHeroes on componentDidMount', () => {
    const wrapper = mount(<HeroList heroes={[expected]} listHeroes={spy} />);
    expect(spy.calledOnce).is.true;
  });

  it(`renders a grid with an anchor to ${expected.uuid} and a header of ${expected.heroName}`, () => {
    const wrapper = mount(<HeroList heroes={[expected]} listHeroes={spy} />);

    const anchor = wrapper.find('Link')
      .filterWhere(c => c.prop('to') === `/hero/${expected.uuid}`)
      .at(0);
    expect(anchor).to.exist;

    const header = anchor.find('h4').at(0);
    expect(header).to.exist;
    expect(header.text()).to.equal(expected.heroName);
  });
});