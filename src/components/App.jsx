import ContactForm from './ContactForm';
import ContactList from './ContactList';

// import Filter from './Filter';

export function App() {
  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      {/* <Filter onChange={changeFilter} value={filter}></Filter> */}
      <ContactList></ContactList>
    </div>
  );
}
