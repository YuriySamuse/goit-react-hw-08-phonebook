import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { Title, Wrapper } from 'components/App.styled';

const App = () => {
  return (
    <Wrapper>
      <Title title="Phonebook">Phonebook</Title>
      <ContactForm />
      <Title title="Contacts">Contacts</Title>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default App;
