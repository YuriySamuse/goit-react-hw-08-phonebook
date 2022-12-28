import React from 'react';
import PropTypes from 'prop-types';

import { Input, Label } from 'components/Filter/Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="name" value={value} onChange={onChange}></Input>
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
