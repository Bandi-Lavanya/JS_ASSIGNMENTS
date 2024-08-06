import React, { useRef } from 'react';

const RefComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Ref Component</h1>
      <input ref={inputRef} type="text" placeholder="Focus me with button" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default RefComponent;
