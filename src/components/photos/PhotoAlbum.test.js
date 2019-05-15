import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('Photo Album component', () => {
  it('renders a PhotoAlbum', () => {
    const photos = [
      'coolImg1',
      'hotImg2',
      'lukewarmImg3'
    ];
    const wrapper = shallow(<PhotoAlbum title='Dope Album' photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
