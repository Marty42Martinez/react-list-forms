import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo Component', () => {
  it('renders a Photo', () => {
    const wrapper = shallow(<Photo photo="/real/path/to/foto" />);
    expect(wrapper).toMatchSnapshot();
  });
});
