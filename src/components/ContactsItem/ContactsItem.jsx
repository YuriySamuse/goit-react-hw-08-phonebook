import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => (
  <>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => onDelete(id)}>Delete</button>
  </>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
