import { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import initialContacts from '../data/contacts';
import Filter from './Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

export function App() {
  // state = {
  //   contacts: initialContacts,
  //   filter: '',
  // };

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // componentDidUpdate(prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.warning(`${name} is already in contacts.`, {
        position: 'center-top',
      });
      return;
    }
    // this.setState(({ contacts }) => ({
    //   contacts: [contact, ...contacts],
    // }));
    setContacts([contact, ...contacts]);
  };

  const deleteContact = id => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    // }));
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    // const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter}></Filter>
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      ></ContactList>
    </div>
  );
}

// addContact = ( name, number ) => {
//     const { contacts } = this.state;

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       Notify.warning(`${name} is already in contacts.`, {
//         position: 'center-top',
//       });
//       return;
//     }
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };
