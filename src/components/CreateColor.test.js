import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('CreateColor component', () => {
  it('renders a CreateColor', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updates name on change', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);

    wrapper.find('[name="name"]').at(0).simulate('change', {
      target: { name: 'name', value: 'Red' }
    });

    expect(wrapper.state('name')).toEqual('Red');
  });

  it('updates a color on change', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);

    wrapper.find('[name="color"]').at(0).simulate('change', {
      target: { name: 'color', value: '#FF0000' }
    });
    
    expect(wrapper.state('color')).toEqual('#FF0000');
  });


});
