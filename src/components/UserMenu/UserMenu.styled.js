import styled from 'styled-components';

export const WrapStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UsernameStyled = styled.p`
  font-weight: 700;
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
