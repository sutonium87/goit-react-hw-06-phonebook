// Import React and necessary dependencies and styles
import React from 'react';
import style from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Import useSelector from 'react-redux' for selecting data from the Redux store
import { useSelector } from 'react-redux';

// Import selectors from Redux slice
import { getFilter, getContacts } from 'redux/selectors';

// Define the ContactList functional component
export default function ContactList() {
  // Get contacts and filter from the Redux store
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Filter contacts based on the search filter
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  // Display a warning notification if no contacts match the search filter
  if (filter.toLowerCase() && !filteredContacts.length) {
    Notify.warning('No contacts matching your request', {
      position: 'center-center',
    });
  }

  // JSX rendering for the ContactList component
  return (
    <div className={style.contactWrapper}>
      <h2>Contacts</h2>
      <ul className={style.contactList}>
        {/* Map through filtered contacts and render ContactItem components */}
        {filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contacts={contact} />;
        })}
      </ul>
    </div>
  );
}
