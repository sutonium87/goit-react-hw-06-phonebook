// Import React and necessary components
import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// Define the main App functional component
export function App() {
  // JSX rendering for the App component
  return (
    <>
      {/* Render the ContactForm component for adding new contacts */}
      <ContactForm />
      {/* Render the Filter component for searching and filtering contacts */}
      <Filter />
      {/* Render the ContactList component for displaying contacts */}
      <ContactList />
    </>
  );
}
