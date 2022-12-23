import styled from 'styled-components';

export const Item = styled.p`
  font-size: 18px;
  color: blue;
  margin-right: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;

  &:hover {
    color: red;
  }
`;
