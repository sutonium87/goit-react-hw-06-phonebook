// Selector function to get the contacts array from the Redux state
export const getContacts = state => state.contacts.contacts;

// Selector function to get the filter value from the Redux state
export const getFilter = state => state.filter.filter;
