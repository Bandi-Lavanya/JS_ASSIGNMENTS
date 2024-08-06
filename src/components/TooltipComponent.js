import React, { useState } from 'react';

const TooltipComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Tooltip Component</h1>
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Hover over me
      </button>
      {visible && <div className="tooltip">Tooltip text: Hello Every One!</div>}
    </div>
  );
};

export default TooltipComponent;
