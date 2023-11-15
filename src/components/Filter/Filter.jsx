// Import React and necessary dependencies and styles
import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

// Import filterContacts action and Redux hooks from 'react-redux'
import { filterContacts } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

// Import selector from Redux slice
import { getFilter } from 'redux/selectors';

// Define the Filter functional component
export default function Filter() {
  // Get the current filter value from the Redux store
  const filter = useSelector(getFilter);

  // Retrieve dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle changes in the filter input
  const handleFilterChange = event => {
    // Dispatch the 'filterContacts' action to update the filter value in the store
    dispatch(filterContacts(event.target.value));
  };

  // JSX rendering for the Filter component
  return (
    <div className={style.filterWrapper}>
      {/* Label for the filter input */}
      <label className={style.filterLabel}>Find contacts by name</label>
      {/* Input field for entering the contact name to search */}
      <input
        className={style.filterInput}
        type="text"
        name="filter"
        placeholder="Enter contact to search"
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
}

// PropTypes for Filter component
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
