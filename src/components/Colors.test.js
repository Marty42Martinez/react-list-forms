import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('renders a Colors', () => {
    const colors = [
      { name: 'color1', hex: '#112233' },
      { name: 'color2', hex: '#332211' }
    ];

    const wrapper = shallow(<Colors colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});