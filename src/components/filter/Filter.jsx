import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filter-slice';
import css from './Filter.module.css'

const Filter = () => {
    const dispatch = useDispatch();
    const handleChange = value => dispatch(filterContacts(value));
    return (
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Enter name for search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => handleChange(e.target.value)}
      />
    );
}

export default Filter;
Filter.propTypes = { onFilter: PropTypes.func };