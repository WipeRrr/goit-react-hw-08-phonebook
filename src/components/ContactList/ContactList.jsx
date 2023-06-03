import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/sliceContacts';
import { getContacts, getFilter } from 'Redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
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
