// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Import PropTypes for defining component prop types
import PropTypes from 'prop-types';

// Import the CSS module for styling
import style from './ContactForm.module.css';

// Import the Notify component from 'notiflix' library
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Import useDispatch and useSelector from 'react-redux' for interacting with Redux store
import { useDispatch, useSelector } from 'react-redux';

// Import actions and selectors from Redux slices
import { addContacts } from 'redux/contactBookSlice';
import { getContacts } from 'redux/selectors';

// Define the ContactForm functional component
export function ContactForm() {
  // State variables for storing name and number input values
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Retrieve dispatch function from Redux
  const dispatch = useDispatch();

  // Get the 'contacts' array from the Redux store
  const contacts = useSelector(getContacts);

  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Check if the entered contact name already exists in the contacts array
    const contactExists = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    // If the contact already exists, show a warning notification and reset input fields
    if (contactExists) {
      Notify.warning(`${name} is already in contacts`, {
        position: 'center-center',
      });
      setName('');
      setNumber('');
      return;
    }

    // Dispatch the 'addContacts' action to add a new contact to the store
    dispatch(addContacts(name, number));

    // Reset input fields after successful contact addition
    setName('');
    setNumber('');

    // Show a success notification for the added contact
    Notify.success(`${name} was successfully added to your contacts`, {
      position: 'center-center',
    });
  };

  // JSX rendering for the ContactForm component
  return (
    <div className={style.phonebookWrapper}>
      <h1>Phonebook</h1>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        {/* Input field for entering contact name */}
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
        {/* Input field for entering phone number */}
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
        {/* Button to submit the form and add a new contact */}
        <button className={style.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

// PropTypes for ContactForm component
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};
