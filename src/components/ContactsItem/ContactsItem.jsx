import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from 'components/ContactsItem/ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <>
      <Item>
        {name}: {number}
      </Item>
      <Button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
