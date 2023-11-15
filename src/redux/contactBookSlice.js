// Import createSlice and nanoid from '@reduxjs/toolkit'
import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state for the contact book slice
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

// Create a contact book slice using createSlice
const contactBookSlice = createSlice({
  name: 'contacts', // Slice name
  initialState: initialState, // Initial state
  reducers: {
    // Reducer for adding contacts
    addContacts: {
      reducer(state, action) {
        // Add the new contact to the contacts array
        state.contacts = [...state.contacts, action.payload];
      },
      // Prepare function to generate the payload with a unique id using nanoid
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
        // Filter out the deleted contact from the contacts array
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.contact.id
        );
        // Reset the filter value to an empty string
        state.filter = '';
      },
      // Prepare function to generate the payload with the contact to be deleted
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

// Export the actions and reducer from the contact book slice
export const { addContacts, deleteContacts } = contactBookSlice.actions;
export const contactBookReducer = contactBookSlice.reducer;
