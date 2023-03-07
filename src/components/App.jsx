import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { Title, Wrapper } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title title="Phonebook">Phonebook</Title>
      <ContactForm />
      <Title title="Contacts">Contacts</Title>
      <Filter />
      {isLoading && !error && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {!isLoading && <ContactList />}
    </Wrapper>
  );
};

export default App;
