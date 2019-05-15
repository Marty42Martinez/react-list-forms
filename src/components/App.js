import React from 'react';
import Colors from './Colors';

export default function App() {
  const colors = [
    { name: 'purple', rgb: { red: 70, green: 39, blue: 89 } },
    { name: 'maroon', rgb: { red: 89, green: 39, blue: 62 } },
    { name: 'vivid blue', rgb: { red: 0, green: 144, blue: 229 } }
  ];
  
  return <Colors colors={colors} />;
}
