import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Input, Label } from 'components/Filter/Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
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
