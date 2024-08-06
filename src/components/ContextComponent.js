import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState('Good Morning');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ContextConsumer = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('Good Afternoon')}>Change</button>
    </div>
  );
};

const ContextComponent = () => (
  <ContextProvider>
    <h1>Context API Component</h1>
    <ContextConsumer />
  </ContextProvider>
);

export default ContextComponent;
