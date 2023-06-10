import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../Redux/operations';
import { useEffect } from 'react';
import {
  selectError,
  selectVisibleContacts,
  selectIsLoading,
} from '../../Redux/selectors';
const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <p>{error}</p>}
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, phone }) => (
          <li className={css.contactList__item} key={id}>
            {name}:
            <span className={css.contactList__item__number}>{phone}</span>
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
    </>
  );
};

export default ContactList;
