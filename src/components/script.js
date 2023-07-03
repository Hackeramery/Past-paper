import React, { useEffect } from 'react';
import all_data from '../main.js';

function MyComponent() {
  useEffect(() => {
    all_data.script1();
  }, []);

  return <div>Component content</div>;
}

export default MyComponent;
