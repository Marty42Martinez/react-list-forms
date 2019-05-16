import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('renders a sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <a href="thisisatest">TEST</a>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
