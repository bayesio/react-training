import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import About from '../src/pages/About'

const expected = 'Hello About';
describe('<About />', () => {
  it(`renders a div with ${expected}`, () => {
    const wrapper = render(<About />)
    expect(wrapper.text()).to.contain(expected);
  });
});