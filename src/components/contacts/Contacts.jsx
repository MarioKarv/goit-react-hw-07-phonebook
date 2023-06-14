import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contact-slice';
import { getAllContacts } from 'redux/contacts/contact-selectors';
import { getFilteredContacts } from 'redux/filter/filter-selectors';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContactsContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = id => {
    const action = removeContact(id);
    dispatch(action);
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

  return <ul className={css.ul}>{elements}</ul>;
};
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
