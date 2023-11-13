import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactBookSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
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
    deleteContacts: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.contact.id
        );
        state.filter = '';
      },
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

export const { addContacts, deleteContacts } = contactBookSlice.actions;
export const contactBookReducer = contactBookSlice.reducer;
