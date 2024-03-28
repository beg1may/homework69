import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShowDetails } from '../store/todoSlice';

const ShowDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const show = useSelector((state) => state.show.details);

    useEffect(() => {
        dispatch(fetchShowDetails(id));
    }, [dispatch, id]);

    return (
        <div>
            <h2>{show.name}</h2>
            <p>{show.summary}</p>
        </div>
    );
};

export default ShowDetails;
