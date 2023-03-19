import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Title, Wrapper } from 'pages/Contacts/Contacts.styled';
import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
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
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && <ContactList />}
    </Wrapper>
  );
};

export default Contacts;
