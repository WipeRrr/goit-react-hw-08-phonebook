const ContactForm  = ({ name, onChange }) => {
  return (
    <div>
      <form >
        <h1>Phonebook</h1>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChange}
              />
              <button type="submit"></button>
      </form>

      <ul>
        <h2>Contacts</h2>
        <li></li>
      </ul>
    </div>
  );
};

export default ContactForm ;
