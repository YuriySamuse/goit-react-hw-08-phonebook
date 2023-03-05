import React from 'react';
import ContactItem from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Items } from 'components/ContactsList/ContactsList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);

  const showContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContacts.toLowerCase())
    );
  };

  const visibleContacts = showContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Items key={id}>
          <ContactItem id={id} name={name} number={number} />
        </Items>
      ))}
    </List>
  );
};

export default ContactList;
