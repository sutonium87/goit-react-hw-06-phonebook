// Import createSlice from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the filter slice
const filterInitialState = {
  filter: '', // Initial value for the filter
};

// Create a filter slice using createSlice
const filterSlice = createSlice({
  name: 'filter', // Slice name
  initialState: filterInitialState, // Initial state
  reducers: {
    // Reducer for filtering contacts
    filterContacts: {
      reducer(state, action) {
        // Set the filter value to the payload value
        state.filter = action.payload.filter;
      },
      // Prepare function to generate the payload with the filter value
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

// Export the reducer and actions from the filter slice
export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
