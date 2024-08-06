import React from 'react';
import { FixedSizeList as List } from 'react-window';

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, style }) => (
  <div style={style}>{items[index]}</div>
);

const VirtualizedListComponent = () => (
  <div>
    <h1>Virtualized List Component</h1>
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  </div>
);

export default VirtualizedListComponent;
