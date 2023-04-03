import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LoginMainContainer = styled.div`
  width: 70%;
  padding-top: 5rem;
  margin-top: 12rem;
  @media screen and (max-width: 400px) {
    margin: 0;
    width: 100%;
  }
`;
export const LoginTitleContainer = styled.div``;

export const LoginTitle = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  font-size: 2.6rem;
  letter-spacing: 0.1rem;
  margin-left: 4rem;
  @media screen and (max-width: 400px) {
    margin: 0 0 0 1rem;
  }
`;

export const LoginDescriptionContainer = styled.div`
  margin-top: 1rem;
`;

export const LoginDescription = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.6rem;
  margin-left: 4rem;
  @media screen and (max-width: 400px) {
    margin: 0 0 0 1rem;
  }
`;

export const AuthForm = styled.form``;
