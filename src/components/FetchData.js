import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
    </div>
  );
};

export default FetchData;
