import React from 'react';

const SelectedColor = ({ color }) => {
  return (
    <div className="selected-color">
      <p>Selected Color: <strong>{color}</strong></p>
    </div>
  );
};

export default SelectedColor;
