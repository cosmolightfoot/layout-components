import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog.js';

describe('Dog test', () => {
  it('renders dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
