import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './App.css';

export default function App() {
  //Woah...Hooks
  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'Welcome home, User',
    about: 'About Me, Myself, and I',
    blog: 'Out for Lunch',
    contact: 'Awaiting the aliens'
  };

  return (
    <section className={styles.App}>
      <Sidebar select={updateSelected}>
        <a onClick={() => updateSelected('home')} href="#">Home</a>
        <a onClick={() => updateSelected('about')} href="#">About</a>
        <a onClick={() => updateSelected('blog')} href="#">Blog</a>
        <a onClick={() => updateSelected('contact')} href="#">Contact</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </section>
  );
}
