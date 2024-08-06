import React, { useState, useEffect } from 'react';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }
    // Simulate a network request
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        fetchMoreData();
      }
    });
  }, []);

  return (
    <div>
      <h1>Infinite Scrolling Component</h1>
      <ul>
        {items.map((_, index) => (
          <li key={index}>Item {index + 1}</li>
        ))}
      </ul>
      {hasMore && <p>Loading more items...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
