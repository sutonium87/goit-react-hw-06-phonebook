// Importing necessary functions and utilities from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the filter slice
const filterInitialState = {
  filter: '', // Initial filter value
};

// Creating a slice for managing the filter
const filterSlice = createSlice({
  name: 'filter', // Slice name
  initialState: filterInitialState, // Initial state
  reducers: {
    // Reducer for updating the filter value
    filterContacts: {
      reducer(state, action) {
        // Updating the filter value in the state
        state.filter = action.payload.filter;
      },
      // Prepare function to create the action payload with the new filter value
      prepare(filter) {
        return {
          payload: {
            filter,
          },
        };
      },
    },
  },
});

// Exporting the reducer and actions from the slice
export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
