// Importing necessary functions and utilities from Redux Toolkit
import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state for the contacts slice
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

// Creating a slice for managing contacts
const contactBookSlice = createSlice({
  name: 'contacts', // Slice name
  initialState: initialState, // Initial state
  reducers: {
    // Reducer for adding contacts
    addContacts: {
      reducer(state, action) {
        // Adding the new contact to the contacts array in the state
        state.contacts = [...state.contacts, action.payload];
      },
      // Prepare function to create the action payload with an ID using nanoid
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    // Reducer for deleting contacts
    deleteContacts: {
      reducer(state, action) {
        // Filtering out the contact to be deleted from the contacts array
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.contact.id
        );
        // Resetting the filter to an empty string (assuming 'filter' is part of the state)
        state.filter = '';
      },
      // Prepare function to create the action payload with the contact to be deleted
      prepare(contact) {
        return {
          payload: {
            contact,
          },
        };
      },
    },
  },
});

// Exporting actions and reducer from the slice
export const { addContacts, deleteContacts } = contactBookSlice.actions;
export const contactBookReducer = contactBookSlice.reducer;
