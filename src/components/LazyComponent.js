import React from 'react';

const LazyComponent = () => {
  return (
    <div>
      <h2>Lazy Loaded Component</h2>
      <p>This component was loaded lazily using React Suspense.</p>
    </div>
  );
};

export default LazyComponent;
