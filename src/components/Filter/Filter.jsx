import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

import { filterContacts } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div className={style.filterWrapper}>
      <label className={style.filterLabel}>Find contacts by name</label>
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
