import { useSelector, useDispatch } from 'react-redux';
// import { removeContact } from 'redux/contacts/contact-slice';
import { getAllContacts } from 'redux/contacts/contact-selectors';
import { getFilteredContacts } from 'redux/filter/filter-selectors';
import { useEffect } from 'react';
import {
  fetchAllContacts,
  fetchDeleteContacts,
} from 'redux/contacts/contact-operations'
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = () => {
  const isLoading = useSelector(store => store.contacts.isLoading);
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContactsContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = id => {
    dispatch(fetchDeleteContacts(id));
  };
  const elements = filterContactsContacts?.map(({ name, id, number }) => {
    return (
      <li className={css.li} key={id} name={id}>
          {name}: {number}
        <button
          type="button"
          className={css.button}
          onClick={() => handleDelete(id)}
        >
          X
        </button>
      </li>
    );
  });

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={css.list}>{elements}</ul>
    </>
  );
};
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
