import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import initialContacts from '../data/contacts';
import Filter from './Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

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
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.filter}></Filter>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
