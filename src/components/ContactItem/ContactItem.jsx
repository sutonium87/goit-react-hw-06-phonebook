import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactBookSlice';

export default function ContactItem({ contacts }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(contacts));
    Notify.info(
      `${contacts.name} was successfully deleted from your phonebook`,
      {
        position: 'center-center',
      }
    );
  };

  return (
    <div>
      <li className={style.contactItem}>
        <div className={style.contacts}>
          <p>{contacts.name}</p>
          <p>{contacts.number} </p>
        </div>
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

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
