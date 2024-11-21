import React from 'react';
import Typed from 'typed.js';

export default function MultiText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>proficient</i> in Java, JS &amp; Python.', 'who loves to code', 'that took too long to make this'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
      <span ref={el} />
  );
}