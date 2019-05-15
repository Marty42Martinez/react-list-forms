import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color Component', () => {
  it('renders a Color', () => {
    const rgb = {
      red: 0,
      green: 200,
      blue: 120
    };
    const wrapper = shallow(<Color name="Green-ish" rgb={rgb} />);
    expect(wrapper).toMatchSnapshot();
  });

});
