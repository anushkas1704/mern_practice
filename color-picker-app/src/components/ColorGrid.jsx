import React from 'react';

const colors = [
  '#FF5733', '#33FF57', '#5733FF', '#FFC300', '#DAF7A6',
  '#C70039', '#900C3F', '#581845', '#2ECC71', '#AF7AC5',
];

const ColorGrid = ({ setSelectedColor }) => {
  return (
    <div className="color-grid">
      {colors.map((color) => (
        <div
          key={color}
          className="color-box"
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorGrid;
