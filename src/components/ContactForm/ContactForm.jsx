import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectContacts, selectIsLoading } from 'Redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

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
      dispatch(addContact({ name, phone }));
    }
    setName('');
    setPhone('');
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
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
