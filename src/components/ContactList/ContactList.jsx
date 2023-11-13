// Importing necessary libraries and components
import React from 'react'; // React library
import style from './ContactList.module.css'; // CSS module styles
import ContactItem from 'components/ContactItem/ContactItem'; // Importing the ContactItem component
import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Notification library

// Importing Redux dependencies
import { useSelector } from 'react-redux'; // React Redux hook
import { getFilter, getContacts } from 'redux/selectors'; // Selectors for getting filter and contacts

// ContactList component definition
export default function ContactList() {
  // Redux hooks for accessing filter and contacts from the state
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Filtering contacts based on the search filter
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  // Displaying a warning notification if no contacts match the filter
  if (filter.toLowerCase() && !filteredContacts.length) {
    Notify.warning('No contacts matching your request', {
      position: 'center-center',
    });
  }

  // Rendering the ContactList component
  return (
    <div className={style.contactWrapper}>
      <h2>Contacts</h2>
      {/* List of contacts */}
      <ul className={style.contactList}>
        {/* Mapping through filtered contacts and rendering ContactItem for each */}
        {filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contacts={contact} />;
        })}
      </ul>
    </div>
  );
}
