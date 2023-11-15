// Import React and necessary dependencies and styles
import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Import useDispatch from 'react-redux' for interacting with Redux store
import { useDispatch } from 'react-redux';

// Import deleteContacts action from Redux slice
import { deleteContacts } from 'redux/contactBookSlice';

// Define the ContactItem functional component with props
export default function ContactItem({ contacts }) {
  // Retrieve dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle contact deletion
  const handleDelete = () => {
    // Dispatch the 'deleteContacts' action to remove the contact from the store
    dispatch(deleteContacts(contacts));

    // Show an informational notification for the deleted contact
    Notify.info(
      `${contacts.name} was successfully deleted from your phonebook`,
      {
        position: 'center-center',
      }
    );
  };

  // JSX rendering for the ContactItem component
  return (
    <div>
      <li className={style.contactItem}>
        <div className={style.contacts}>
          {/* Display the contact's name */}
          <p>{contacts.name}</p>
          {/* Display the contact's phone number */}
          <p>{contacts.number} </p>
        </div>
        {/* Button to trigger the handleDelete function */}
        <button
          type="button"
          className={style.formButton}
          onClick={handleDelete}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

// PropTypes for ContactItem component
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
