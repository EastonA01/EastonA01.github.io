import React from 'react';
import Typed from 'typed.js';

export default function MultiText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>proficient</i> in Java, JS &amp; Python.',
        '<b>building</b> full-stack applications since 2022.',
        'engineering new solutions with multiple frameworks.', 'currently working with React, tsParticles, and typed.js.',
        'actively working to <b>change the world around him.</b>'
      ],
      typeSpeed: 75,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
      <span ref={el} style={{ color: 'var(--secondary-color)' }}/>
  );
}