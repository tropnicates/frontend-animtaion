import React, { useState } from 'react';
import './BottomSheet.css';

const snapPoints = ['closed', 'quarter-open', 'half-open', 'three-quarter-open', 'fully-open'];

const BottomSheet = () => {
  const [position, setPosition] = useState('closed');

  const handleButtonClick = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className={`bottom-sheet ${position}`}>
      <div className="handle" />
      <div className="content">
        <p>Moving Part</p>
      </div>
      <div className="buttons">
        {snapPoints.map((snapPoint) => (
          <button key={snapPoint} onClick={() => handleButtonClick(snapPoint)}>
            {snapPoint.replace('-', ' ').toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomSheet;
