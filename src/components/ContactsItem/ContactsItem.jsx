import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from 'components/ContactsItem/ContactsItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => (
  <>
    <Item>
      {name}: {number}
    </Item>
    <Button onClick={() => onDelete(id)}>Delete</Button>
  </>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
