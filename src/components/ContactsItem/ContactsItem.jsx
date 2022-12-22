import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number }) => (
  <>
    <p>
      {name}: {number}
    </p>
  </>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
