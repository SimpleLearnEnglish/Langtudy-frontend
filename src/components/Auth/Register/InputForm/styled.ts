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
  width: 80%;
  border: none;
  background: none;
  font-weight: bold;
  border-radius: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  outline: none;
  margin-left: 1rem;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const RegisterButton = styled.button`
  width: 34.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none;
  background: rgba(0, 255, 30, 0.2);
  :hover {
    background: rgba(0, 255, 30, 0.4);
  }
  border-radius: 0.6rem;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 5rem;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
