import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Input, Label } from 'components/Filter/Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <Label>
      Find contacts by name
      <Input type="name" value={filter} onChange={onChange}></Input>
    </Label>
  );
};

export default Filter;
