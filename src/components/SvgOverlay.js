import React from 'react';
import SVGComponent from './SVGComponent';

const SvgOverlay = () => {
  return (
    <div className="svg-container">
      {/* SVG Animation */}
      <SVGComponent></SVGComponent>

      {/* Overlay Text */}
      <div className="overlay-text">
        <h1>Easton Anderson</h1>
        <p>Building modern, scalable solutions with expertise and innovation.</p>
      </div>
    </div>
  );
};

export default SvgOverlay;