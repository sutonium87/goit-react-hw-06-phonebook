// Importing necessary libraries and components
import React from 'react'; // React library
import style from './ContactItem.module.css'; // CSS module styles
import PropTypes from 'prop-types'; // PropTypes for defining component prop types
import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Notification library

// Importing Redux dependencies
import { useDispatch } from 'react-redux'; // React Redux hook
import { deleteContacts } from 'redux/contactBookSlice'; // Action creator for deleting contacts

// ContactItem component definition
export default function ContactItem({ contacts }) {
  // Redux hook for dispatching actions
  const dispatch = useDispatch();

  // Handler for deleting a contact
  const handleDelete = () => {
    // Dispatching the deleteContacts action to delete the contact
    dispatch(deleteContacts(contacts));

    // Displaying an info notification for deleting the contact
    Notify.info(
      `${contacts.name} was successfully deleted from your phonebook`,
      {
        position: 'center-center',
      }
    );
  };

  // Rendering the ContactItem component
  return (
    <div>
      {/* List item for displaying contact information */}
      <li className={style.contactItem}>
        <div className={style.contacts}>
          <p>{contacts.name}</p>
          <p>{contacts.number} </p>
        </div>
        {/* Button for deleting the contact */}
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

// Prop types for the ContactItem component
ContactItem.propTypes = {
  id: PropTypes.string.isRequired, // Prop type for the contact ID
  name: PropTypes.string.isRequired, // Prop type for the contact name
  number: PropTypes.string.isRequired, // Prop type for the contact number
  onDeleteContact: PropTypes.func.isRequired, // Prop type for the delete contact handler
};
