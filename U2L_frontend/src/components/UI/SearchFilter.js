import React, { useState } from 'react';
import { Header, Button, Text, Box } from "grommet";

const SearchAndFilter = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {/* <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};


export default SearchAndFilter;