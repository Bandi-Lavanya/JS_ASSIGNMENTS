// src/components/ItemList.js
import React from 'react';

const ItemList = () => {
  // Sample array of items
  const items = ['Apple', 'Banana', 'Grapes', 'Orange'];

  return (
    <div>
      <h1>List of Items:</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
