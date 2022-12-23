import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from 'components/ContactsItem/ContactsItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
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
