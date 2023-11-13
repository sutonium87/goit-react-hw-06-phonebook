// Importing necessary libraries and components
import React from 'react'; // React library
import style from './Filter.module.css'; // CSS module styles
import PropTypes from 'prop-types'; // PropTypes for defining component prop types

// Importing Redux dependencies
import { filterContacts } from 'redux/filterSlice'; // Action creator for filtering contacts
import { useDispatch, useSelector } from 'react-redux'; // React Redux hooks
import { getFilter } from 'redux/selectors'; // Selector for getting the filter from the state

// Filter component definition
export default function Filter() {
  // Redux hooks for accessing filter from the state and dispatching actions
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // Handler for handling filter changes
  const handleFilterChange = event => {
    // Dispatching the filterContacts action to update the filter in the state
    dispatch(filterContacts(event.target.value));
  };

  // Rendering the Filter component
  return (
    <div className={style.filterWrapper}>
      {/* Label for the filter input */}
      <label className={style.filterLabel}>Find contacts by name</label>
      {/* Input for entering the contact name to search */}
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

// Prop types for the Filter component
Filter.propTypes = {
  value: PropTypes.string.isRequired, // Prop type for the filter value
  onChange: PropTypes.func.isRequired, // Prop type for the filter change handler
};
