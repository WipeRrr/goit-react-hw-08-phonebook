import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/operations';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectContacts, selectIsLoading } from 'Redux/selectors';
import Loader from '../../components/Loader/Loader';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() ===
          e.target.elements.name.value.toLowerCase()
      )
    ) {
      Notify.warning(`${e.target.elements.name.value} is already in contact`, {
        position: 'center-top',
      });
    } else {
      dispatch(addContact({ id, name, number }));
    }
    setName('');
    setNumber('');
  };

  return (
    <>
      {isLoading && <Loader className={css.contactForm__label} />}
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label className={css.contactForm__label}>
          Name
          <input
            className={css.contactForm__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={css.contactForm__label}>
          Number
          <input
            className={css.contactForm__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button className={css.contactForm__button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
