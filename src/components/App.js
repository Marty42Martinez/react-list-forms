import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import PhotoAlbum from './photos/PhotoAlbum';
import img1 from '../assets/Marty-Avatar2.png';
import img2 from '../assets/coffee_break_by_nyaasu.jpg';
import img3 from '../assets/fantasy_forest_by_indigodeep.jpg';
import img4 from '../assets/honey-bear.png';

export default function App() {
  const photos = [
    img1,
    img2,
    img3,
    img4
  ];

  return (
    <>
      <Header />
      <PhotoAlbum title="Miscellaneous Awesomeness" photos={photos} />
      <Footer />
    </>
  );
}
