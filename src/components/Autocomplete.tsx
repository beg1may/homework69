import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {clearSearchResults} from "../store/todoSlice";

const Autocomplete = () => {
    const shows = useSelector((state) => state.show.results);
    const dispatch = useDispatch();

    const handleItemClick = () => {
        dispatch(clearSearchResults());
    };

    return (
        <div>
            {shows.map((show) => (
                <div key={show.id}>
                    <Link to={`/shows/${show.id}`} onClick={handleItemClick}>
                        {show.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Autocomplete;
