import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import Input from '../Input';

const SearchBar = ({ setSearchString, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchString = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setSearchString('');
    } else {
      const timer = setTimeout(() => {
        setSearchString(searchTerm);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [searchTerm, setSearchString]);

  return (
    <div className={"searchBar"}>
      <Input
        className={"inputField"}
        type="text"
        name="search"
        value={searchTerm}
        onChange={updateSearchString}
        placeholder={placeholder ? placeholder : 'Search content...'}
      />
    </div>
  );
};

export default SearchBar;
