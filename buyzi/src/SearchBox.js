import React, { useState } from 'react';
import axios from 'axios';
import './SearchBox.css';

const SearchBox = ({ onSearch, onLoading }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    onLoading(true);
    try {
      const response = await axios.get(`http://0.0.0.0:3001/api/search?query=${query}`);
      onSearch(Object.values(response.data));
      onLoading(false);
    } catch (err) {
      onSearch([]);
      onLoading(false);
      // alert("Failed to fetch data. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSearch} className="search-form">
      {/* <input type="text" value={query} onChange={handleInputChange} className="search-input" placeholder="Search..." /> */}
      <input type="text" value="Unicorn themed birthday party for my 5-year-old daughter" onChange={handleInputChange} className="search-input" placeholder="Search..." />
      <input type="submit" value="Search" className="search-button" />
      <button className="voice-search-button" disabled>
        <i className="fa fa-microphone" aria-hidden="true"></i>
      </button>
    </form>
  );
}

export default SearchBox;
