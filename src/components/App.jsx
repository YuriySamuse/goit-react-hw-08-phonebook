import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { Title, Wrapper } from 'components/App.styled';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = value => {
    const verifyContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

    if (verifyContact) {
      return alert(` Kонтакт ${value.name} вже існує!`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { name: value.name, number: value.number, id: nanoid() },
        ],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  showContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <Wrapper>
        <Title title="Phonebook">Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Title title="Contacts">Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.showContacts()}
          onDelete={this.deleteItem}
        />
      </Wrapper>
    );
  }
}

export default App;
