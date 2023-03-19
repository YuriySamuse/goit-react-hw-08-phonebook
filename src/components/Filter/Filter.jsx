import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Input, Label } from 'components/Filter/Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="name" value={filter} onChange={changeFilter}></Input>
    </Label>
  );
};

export default Filter;
