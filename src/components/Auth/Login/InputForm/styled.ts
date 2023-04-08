import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  width: 34.5rem;
  background: rgba(0, 0, 0, 0.04);
  margin-top: 1.2rem;
  margin-left: 4rem;
  border-radius: 0.6rem;
  &:focus-within {
    background: rgba(0, 0, 0, 0.06);
  }
  @media screen and (max-width: 768px) {
    margin: 3rem auto 0 auto;
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  font-weight: bold;
  border-radius: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  padding-left: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  outline: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 7%;
`;

export const AuthButton = styled.button`
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
  margin-left: 4rem;
  @media screen and (max-width: 768px) {
    margin: 0 0 0 2.2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: 2.5rem;
  }
`;
