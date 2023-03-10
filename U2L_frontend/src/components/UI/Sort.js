import React, { useState } from 'react';

const SortByName = ({ data }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedData, setSortedData] = useState(data);

  const handleSortOrderChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    const sorted = [...sortedData].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (order === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setSortedData(sorted);
  };

  return (
    <div>
      <select value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc"> Name </option>
        <option value="desc"> Status </option>
      </select>
      {/* <ul>
        {sortedData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};


export default SortByName;