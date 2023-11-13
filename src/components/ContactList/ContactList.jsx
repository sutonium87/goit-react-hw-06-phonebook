import React from 'react';
// import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  if (filter.toLowerCase() && !filteredContacts.length) {
    Notify.warning('No contacts matching your request', {
      position: 'center-center',
    });
  }

  return (
    <div className={style.contactWrapper}>
      <h2>Contacts</h2>
      <ul className={style.contactList}>
        {filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contacts={contact} />;
        })}
      </ul>
    </div>
  );
}
