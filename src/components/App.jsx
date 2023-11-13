// Importing necessary libraries and components
import React from 'react'; // React library
import { ContactForm } from './ContactForm/ContactForm'; // Importing the ContactForm component
import ContactList from './ContactList/ContactList'; // Importing the ContactList component
import Filter from './Filter/Filter'; // Importing the Filter component

// App component definition
export function App() {
  // Rendering the App component
  return (
    <>
      {/* Rendering the ContactForm component */}
      <ContactForm />
      {/* Rendering the Filter component */}
      <Filter />
      {/* Rendering the ContactList component */}
      <ContactList />
    </>
  );
}
