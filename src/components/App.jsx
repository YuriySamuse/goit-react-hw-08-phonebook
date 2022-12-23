import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

// import { render } from '@testing-library/react';

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

  // formSubmitHandler = ({ name, number }) => {
  //   // console.log({ name, number });
  //   const newContact = { ...{ name, number }, id: nanoid() };
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  //   // console.log(this.state.contacts);
  // };

  formSubmitHandler = ({ name, number }) => {
    const verifyContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const newContact = { ...{ name, number }, id: nanoid() };
    if (!verifyContact) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      return alert(` Kонтакт ${name} вже існує!`);
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
    // console.log(this.state.filter);
  };

  showContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <h1 title="Phonebook">Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 title="Contacts">Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.showContacts()} />
      </>
    );
  }
}

export default App;
