// src/components/Pagination.js
import React, { useState } from 'react';

const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2>Pagination Component</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {[...Array(totalPages).keys()].map((page) => (
          <button key={page} onClick={() => setCurrentPage(page + 1)}>
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
