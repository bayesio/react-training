import { expect } from 'chai';
import { render } from 'enzyme';
import 'mocha';
import * as React from 'react';

import About from './About.presenter';

const expected = 'Hello About';
describe('<About />', () => {
  it(`renders a div with ${expected}`, () => {
    const wrapper = render(<About />);
    expect(wrapper.text()).to.contain(expected);
  });
});
