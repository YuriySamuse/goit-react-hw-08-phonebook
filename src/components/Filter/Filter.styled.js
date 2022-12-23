import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: solid black 1px;
  border-radius: 3px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: black;
  margin-right: 15px;
`;
