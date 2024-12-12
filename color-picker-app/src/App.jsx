import React, { useState } from 'react';
import ColorGrid from './components/ColorGrid';
import SelectedColor from './components/SelectedColor';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF'); // Default color is white.

  return (
    <div className="app" style={{ backgroundColor: selectedColor }}>
      <h1>🎨 Color Picker App</h1>
      <SelectedColor color={selectedColor} />
      <ColorGrid setSelectedColor={setSelectedColor} />
    </div>
  );
}

export default App;
