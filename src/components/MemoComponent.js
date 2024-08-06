import React, { useState, memo } from 'react';

const ExpensiveComponent = memo(({ count }) => {
  console.log('Rendering Expensive Component');
  return <div>Count: {count}</div>;
});

const MemoComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>Memo Component</h1>
      <ExpensiveComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

export default MemoComponent;
