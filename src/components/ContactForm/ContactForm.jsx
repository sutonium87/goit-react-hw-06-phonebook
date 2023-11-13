// Importing necessary libraries and components
import React, { useState } from 'react'; // React library and useState hook
import PropTypes from 'prop-types'; // PropTypes for defining component prop types
import style from './ContactForm.module.css'; // CSS module styles
import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Notification library

// Importing Redux dependencies
import { useDispatch, useSelector } from 'react-redux'; // React Redux hooks
import { addContacts } from 'redux/contactBookSlice'; // Action creator for adding contacts
import { getContacts } from 'redux/selectors'; // Selector for getting contacts from Redux store

// ContactForm component definition
export function ContactForm() {
  // State for managing name and number inputs
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Redux hooks for dispatching actions and accessing state
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // Handler for form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Checking if the contact already exists
    const contactExists = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    // Displaying a warning notification if the contact already exists
    if (contactExists) {
      Notify.warning(`${name} is already in contacts`, {
        position: 'center-center',
      });
      setName('');
      setNumber('');
      return;
    }

    // Dispatching the addContacts action to add a new contact
    dispatch(addContacts(name, number));

    // Resetting input fields
    setName('');
    setNumber('');

    // Displaying a success notification for adding the contact
    Notify.success(`${name} was successfully added to your contacts`, {
      position: 'center-center',
    });
  };

  // Rendering the ContactForm component
  return (
    <div className={style.phonebookWrapper}>
      <h1>Phonebook</h1>
      {/* Form for adding a new contact */}
      <form className={style.contactForm} onSubmit={handleSubmit}>
        {/* Name input field */}
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
        {/* Phone number input field */}
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
        {/* Button to submit the form */}
        <button className={style.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

// Prop types for the ContactForm component
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired, // Prop type for the form submission handler
  onAddContact: PropTypes.func.isRequired, // Prop type for the add contact handler
};
