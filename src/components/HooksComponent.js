import React, { useState } from 'react';

const HooksComponent = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <h2>Input and Display Component</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
};

export default HooksComponent;
