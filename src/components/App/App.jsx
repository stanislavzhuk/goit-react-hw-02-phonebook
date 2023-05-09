import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Container, Title, Contacts, Info } from './App.styled';

Notify.init({
  borderRadius: '10px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      return Notify.info(`${name} is already in contacts`);
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    Notify.success(`${name} has been successfully added to the contact list`);
  };

  deleteContact = id => {
    const index = this.state.contacts.findIndex(contact => contact.id === id);
    if (index === -1) {
      return;
    }
    
    const updatedContacts = [...this.state.contacts];
    updatedContacts.splice(index, 1);
    this.setState({ contacts: updatedContacts });

    Notify.success("Contact deleted successfully!");
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Contacts>Contacts</Contacts>
        <Filter
          value={filter}
          onChange={this.onFilterChange} />
        {contacts.length ? (
          <ContactList
            contacts={this.filterContact()}
            onDelete={this.deleteContact} />
        ) : (
          <Info>No any contacts</Info>
        )}
      </Container>
    );
  }}

export default App;