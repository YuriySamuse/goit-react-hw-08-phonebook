import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from 'components/ContactsItem/ContactsItem';

import { List, Items } from 'components/ContactsList/ContactsList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Items key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        </Items>
      ))}
    </List>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
