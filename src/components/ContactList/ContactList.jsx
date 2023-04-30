import PropTypes from 'prop-types';
import css from './ContactList.module.css';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li
          className={css.contactList__item}
          key={id}
        >
          {name}:<span className={css.contactList__item__number}>{number}</span>
          <button
            className={css.contactList__item__button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
