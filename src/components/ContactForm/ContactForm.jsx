import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactBookSlice';
import { getContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const contactExists = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (contactExists) {
      Notify.warning(`${name} is already in contacts`, {
        position: 'center-center',
      });
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContacts(name, number));
    setName('');
    setNumber('');

    Notify.success(`${name} was successfully added to your contacts`, {
      position: 'center-center',
    });
  };

  return (
    <div className={style.phonebookWrapper}>
      <h1>Phonebook</h1>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <label className={style.formLabel}>Name</label>
        <input
          className={style.phonebookInput}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={event => setName(event.target.value)}
          required
        ></input>
        <label className={style.formLabel}>Phone Number</label>
        <input
          className={style.phonebookInput}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={event => setNumber(event.target.value)}
          required
        ></input>
        <button className={style.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};
