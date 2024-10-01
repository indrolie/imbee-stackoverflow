import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SearchBar;