import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar-container">
      <Search size={20} className="search-icon" />
      <input
        type="text"
        placeholder="Search movies by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <X size={20} onClick={() => setSearchTerm('')} className="clear-search-icon" />
      )}
    </div>
  );
};

export default SearchBar;