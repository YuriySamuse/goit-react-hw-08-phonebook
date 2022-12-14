import React from 'react';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactsList/ContactsList';

// import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h2 title="Phonebook">Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 title="Contacts">Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
