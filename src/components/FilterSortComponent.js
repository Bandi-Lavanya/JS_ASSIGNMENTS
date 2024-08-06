import React, { useState } from 'react';

const FilterSortComponent = () => {
  const [items] = useState(['Apple', 'Orange', 'Banana', 'Grapes', 'Kiwi']);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredItems = items
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a)));

  return (
    <div>
      <h1>Filter and Sort Component</h1>
      <input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
      </button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSortComponent;
