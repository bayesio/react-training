import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import Index from '../src/Pages/Index'

const expected = 'Hello Index';
describe('<Index />', () => {
  it(`renders a div with ${expected}`, () => {
    const wrapper = render(<Index />)
    expect(wrapper.text()).to.contain(expected);
  });
});