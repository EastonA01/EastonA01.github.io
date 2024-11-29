import React, { useState } from 'react';

const HoverPopup = ({ href, text, info, children }) => {
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseEnter = (event, element) => {
    const rect = element.getBoundingClientRect();

    setPopup({
      visible: true,
      x: rect.left + window.scrollX, // Horizontal position matches the link's left edge
      y: rect.top + window.scrollY - 40, // 40px above the link
    });
  };

  const handleMouseLeave = () => {
    setPopup({ visible: false, x: 0, y: 0 });
  };

  const popupStyle = {
    position: 'absolute',
    backgroundColor: 'white',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#333',
    maxWidth: '300px',
    wordWrap: 'break-word',
  };

  const linkStyle = {
    position: 'relative', // Ensures the popup is positioned relative to the link
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <a
        href={href}
        style={linkStyle}
        onMouseEnter={(e) => handleMouseEnter(e, e.currentTarget)}
        onMouseLeave={handleMouseLeave}
      >
        {text || children}
      </a>

      {popup.visible && (
        <div
          style={{
            ...popupStyle,
            top: popup.y,
            left: popup.x,
          }}
        >
          {info}
        </div>
      )}
    </div>
  );
};

export default HoverPopup;
