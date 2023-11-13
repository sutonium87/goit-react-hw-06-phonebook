import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
