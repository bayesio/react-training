import 'jsdom-global/register'; // needed for mount to work

import React from 'react';
import sinon from 'sinon';

import { mount } from 'enzyme';
import { expect } from 'chai';

import HeroEdit from './Edit.presenter'

describe('<HeroEdit />', () => {
  const expected = {
    'groups': [],
    'abilities': {
      'fightingSkills': 7,
      'strength': 7,
      'durability': 7,
      'energyProjection': 1,
      'speed': 1,
      'intelligence': 0 // He knows nothing... hehe
    },
    'realName': 'Jon Snow',
    's3ImageUrl': 'snowman.jpg',
    'powers': 'comes back to life, I guess',
    'uuid': 'kingofthenorth',
    'heroName': 'King of the North',
    'signedAccords': ''
  };

  const selectHero = () => new Promise(r => r());
  const params = (id = null) => id ? { id: id } : {};

  it('has form that can submit.', () => {
    const wrapper = mount(<HeroEdit selectHero={selectHero} hero={expected} params={params()} />);
    wrapper.render();
    
    const form = wrapper.find('form');
    expect(form.exists(), 'form').to.be.true;
    expect(form.prop('onSubmit'), 'submit').to.exist;
  });

  it('has refs for editable hero fields.', () => {
    const wrapper = mount(<HeroEdit selectHero={selectHero} hero={expected} params={params(expected.uuid)} />);

    expect(wrapper.ref('real').exists(), 'real').to.be.true;
    expect(wrapper.ref('hero').exists(), 'hero').to.be.true;
    expect(wrapper.ref('powers').exists(), 'powers').to.be.true;
    expect(wrapper.ref('image').exists(), 'image').to.be.true;
    expect(wrapper.ref('signed').exists(), 'signed').to.be.true;
    expect(wrapper.ref('skill_fight').exists(), 'skill_fight').to.be.true;
    expect(wrapper.ref('skill_str').exists(), 'skill_str').to.be.true;
    expect(wrapper.ref('skill_dur').exists(), 'skill_dur').to.be.true;
    expect(wrapper.ref('skill_energy').exists(), 'skill_energy').to.be.true;
    expect(wrapper.ref('skill_speed').exists(), 'skill_speed').to.be.true;
    expect(wrapper.ref('skill_intel').exists(), 'skill_intel').to.be.true;
  });


  it(`adds {name: [ref=name], email: [ref=email]} on submit.`, () => {
    // Arrange
    const spy = sinon.spy();
    const wrapper = mount(<HeroEdit selectHero={selectHero} hero={expected} params={params(expected.uuid)} addHero={spy} />);

    // Act
    const name = wrapper.ref('name'),
      email = wrapper.ref('email'),
      form = wrapper.find('form');

    name.get(0).value = expected.name;
    name.simulate('change');
    email.get(0).value = expected.email;
    email.simulate('change');
    form.simulate('submit');

    // Assert
    expect(spy.calledOnce).is.true;
    const actual = spy.args[0][0];
    expect(actual.name).to.equal(expected.name);
    expect(actual.email).to.equal(expected.email);
  });
});