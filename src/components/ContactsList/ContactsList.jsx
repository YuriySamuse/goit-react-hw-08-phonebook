import React from 'react';
import ContactItem from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import { List, Items } from 'components/ContactsList/ContactsList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <Items key={id}>
              <ContactItem id={id} name={name} number={number} />
            </Items>
          );
        })}
    </List>
  );
};

export default ContactList;
