import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RegisterAuthContainer = styled.div`
  width: 34.5rem;
  background: rgba(0, 0, 0, 0.04);
  margin-top: 1.2rem;
  border-radius: 0.6rem;
  &:focus-within {
    background: rgba(0, 0, 0, 0.06);
  }
`;

export const RegisterInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  font-weight: bold;
  border-radius: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    padding-top: 1.7rem;
    padding-bottom: 1.7rem;
  }
  padding: 1.5rem 0 1.5rem 2rem;
  outline: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
