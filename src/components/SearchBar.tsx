import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchShows } from '../store/todoSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        dispatch(searchShows(event.target.value));
    };

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search for TV shows..."
        />
    );
};

export default SearchBar;
