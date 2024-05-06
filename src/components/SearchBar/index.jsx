import React, { useState } from 'react'
import './SearchBar.css';
import Input from '../Input';
import Button from '../Button';

const SearchBar = ({ showButton, setSearchString, placeholder }) => {
    const [searchTerm, setSearchTerm] = useState();

    const updateSearchString = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        
        if(searchValue === ""){
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        setSearchString(searchTerm);
    }

    return (
        <>
            {showButton && (
                <div className={"searchBar"}>
                    <Input
                        className={"inputField"}
                        type="text"
                        name="search"
                        onKeyUp={updateSearchString}
                        defaultValue={searchTerm}
                        placeholder={placeholder ? placeholder : 'Search content...'}
                    />
                    <Button
                        className={"btn"}
                        type="button"
                        onClick={handleSubmit}
                        label={"Search"}
                    />
                </div>
            )}
        </>
    );
};

export default SearchBar;
