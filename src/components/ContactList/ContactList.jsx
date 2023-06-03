// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/sliceContacts';
import { getContacts } from 'Redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch()
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactList__item} key={id}>
          {name}:<span className={css.contactList__item__number}>{number}</span>
          <button
            className={css.contactList__item__button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
