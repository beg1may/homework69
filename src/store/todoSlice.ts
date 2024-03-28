import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export const searchShows = createAsyncThunk('shows/search', async (term) => {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${term}`);
    return response.data;
});

export const fetchShowDetails = createAsyncThunk('shows/fetchDetails', async (id) => {
    const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    return response.data;
});

export const clearSearchResults = createAction('shows/clearSearchResults');


const showsSlice = createSlice({
    name: 'shows',
    initialState: {
        results: [],
        details: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchShows.fulfilled, (state, action) => {
                state.results = action.payload;
            })
            .addCase(fetchShowDetails.fulfilled, (state, action) => {
                state.details = action.payload;
            })
            .addCase(clearSearchResults, (state) => {
                state.results = [];
            });
    },
});

export const todoReducer = showsSlice.reducer;
